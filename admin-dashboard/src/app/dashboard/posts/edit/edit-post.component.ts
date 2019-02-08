import {
  Component,
  OnInit,
  EventEmitter,
  ViewEncapsulation,
  ViewChild
} from '@angular/core';
import { MatOptionSelectionChange, MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicFormComponent } from 'src/app/form/components/dynamic-form/dynamic-form.component';
import { FieldConfig } from 'src/app/form/field.interface';
import { Router, ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';
import { BehaviorSubject, pipe, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { NotificationService } from 'src/app/service/notification.service';
import { Template } from '../../models/template';
import { Variable } from '../../models/variable';
import { PostService } from '../../services/post.service';
import { TemplateService } from '../../services/template.service';
import { FieldConfigHelper } from '../../helper/field-config-helper';
import { Post } from '../../models/post';
import { Response } from '../../interfaces/response.interface';
import { AddPostAlertComponent } from '../add-post-alert/add-post-alert.component';
import { ApiConstant } from '../../services/api.constant';
import { PostNameForm } from '../../form/post-name.form';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [style({ opacity: 0 }), animate(600)]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class EditPostComponent implements OnInit {
  // progress bar for saving post
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  // progress bar for fetching template variables
  private loadingTemplateSubject = new BehaviorSubject<boolean>(false);
  public loadingTemplate$ = this.loadingTemplateSubject.asObservable();

  // variable to render dynamic form after the data is fetch from API
  public loaded = false;

  // post fetched from API
  public post: Post;

  public selected = '';
  public saveButton = {
    name: 'save',
    type: 'button',
    label: 'Save'
  };
  public variablesForm: FieldConfig[] = [];
  public nameForm: FieldConfig[] = PostNameForm.form;

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;

  public templateFormGroup: FormGroup;

  public event: EventEmitter<any> = new EventEmitter();

  public categories = this.postService.getCategories();
  public templates: Template[];
  public template: Template;
  public variables: Variable[] = new Array();

  constructor(
    public postService: PostService,
    public fb: FormBuilder,
    private templateService: TemplateService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    public snackBar: MatSnackBar
  ) {
  }


  /**
   * OnInit
   */
  ngOnInit() {
    this.templateFormGroup = this.fb.group({
      template: ['', Validators.required]
    });

    // get templates dropdown
    this.templateService
      .getTemplates()
      .subscribe(result => (this.templates = result));

      const id = +this.route.snapshot.paramMap.get('id');

      // post by name
      this.postService
      .getPost(id)
      .subscribe(
        post => {
          this.post = post;
          const value = [
            {'field': 'url', 'value': this.post.url},
            {'field': 'name', 'value': this.post.name}
          ];

          FieldConfigHelper.addToFieldConfigValue(value, this.nameForm);
          this.templateFormGroup.get('template').setValue(this.post.postTemplateName);
          this.selectedV(this.post.postTemplateName);
        }
      );
  }

  /**
   *
   * @param selected selected template to call the API
   */
  selectedV(selected: string) {

    this.loaded = false;
    this.variablesForm = null;

    this.loadingTemplateSubject.next(true);
    this.templateService
    .getTemplate(selected)
    .pipe(
      finalize(() => {
        this.loadingTemplateSubject.next(false);
        this.loaded = true;
      } )
    )
    .subscribe(result => {
      this.template = result;
      this.variablesForm = result.variables;
         // remove save button to not repeat
      FieldConfigHelper.removeFromFieldConfigValue('save', this.variablesForm);

      // add a save button
      this.variablesForm.push(this.saveButton);

      this.populateSelectedV(this.post);
    });
  }

  /**
   *  @param post: Post . Populate the dynamic form with the values of the post
   */
  populateSelectedV(post: Post) {
    post.variables.forEach(element => {
      this.variablesForm.forEach((item, index) => {
          Object.keys(item).forEach(key => {
              const name = item[key];
              if (key === 'name' && element.name === name) {
                  item['value'] = element.value;
              }
          });
      });
  });
  }

  submit(value: any) {
    console.log(this.templateFormGroup.value);
    console.log(this.form.value);
    console.log(value);

    this.loadingSubject.next(true);

    this.variables = [];
    Object.keys(value).forEach(key => {

      const postVariable = new Variable();
      postVariable.name = key;

      if (localStorage.getItem(key)) {
        postVariable.value = localStorage.getItem(key);
      } else {
        postVariable.value =  value[key];
      }
      this.variables.push(postVariable);
    });

    const post = new Post();
    post.postTemplateName = this.template.name;
    post.postTemplateId = this.template.id;
    post.name = this.form.value.name;
    post.url = this.form.value.url;
    post.variables = this.variables;
    post.expireDate = '';
    post.id = +this.route.snapshot.paramMap.get('id');

    const subscription = this.postService.updatePost(post).
    pipe(
      catchError((err) => {
            this.notificationService.openErrorAlert(err, 'close');
            return  of([]);
      }),
      map((data: Response) => {
         if (data.response === 'SUCCESS') {
           this.snackBar.openFromComponent(AddPostAlertComponent, {
            duration: 5000,
            data: ApiConstant.GUEST_BASE_URL + post.url,
            panelClass: ['alert-box', 'success', 'add-post-alert']
          });
         }
      }),
      finalize(() =>  this.loadingSubject.next(false))
    )
    .subscribe(data => {
      // This code will be executed when the HTTP call returns successfully
       // this.notificationService.openSuccessAlert('Post added successfully', 'close');
    //   this.onBack();
    });

    subscription.add(() => this.loadingSubject.next(false));
  }


  onBack(): void {
    this.router.navigate(['/secured/posts']);
  }

}
