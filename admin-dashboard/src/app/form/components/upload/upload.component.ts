import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../../field.interface';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ApiConstant } from 'src/app/dashboard/services/api.constant';
import { FileUpload } from './file-upload';
import { catchError, last, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpRequest, HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-upload',
  template: `
  <mat-card class='input-card'>
      <a  mat-button id="file-upload-component" (click)="onClick()">
      <mat-icon>file_upload</mat-icon>
      {{field.label}}
      </a>
      <br/>
      <ul>
      <li *ngFor="let file of files" [@fadeInOut]="file.state">
            <mat-progress-bar [value]="file.progress"></mat-progress-bar>
            <span id="file-label">
            {{file.data.name}}
            <a title="Retry" (click)="retryFile(file)" *ngIf="file.canRetry">
            <mat-icon>refresh</mat-icon></a>
            <a title="Cancel" (click)="cancelFile(file)" *ngIf="file.canCancel">
            <mat-icon>cancel</mat-icon></a>
            </span>
      </li>
      </ul>
      <input type="file" [id]='field.name' [name]='field.name' [placeholder]='field.label' accept="{{accept}}" style="display:none;"/>
      <input type="hidden" id = "fileUploadUri" name="fileUploadUri" [value] ='field.label' />
      <mat-card *ngIf="uploadedImage">
      <div>
            <img width="50%" [src]="'data:image/png;base64, ' + uploadedImage | safe: 'url'" alt="Uploaded image" />
      </div>
      </mat-card>
</mat-card>
`,
  styles: [],
  animations: [
    trigger('fadeInOut', [
          state('in', style({ opacity: 100 })),
          transition('* => void', [
                animate(300, style({ opacity: 0 }))
          ])
    ])
]
})
export class UploadComponent implements OnInit {

  @Input() link;
  /** Link text */
  @Input() text = 'Upload';
  /** Name used in form which will be sent in HTTP request. */
  @Input() param = 'file';
  /** Target URL for file uploading. */
  // @Input() target = 'http://file.io';
  @Input() target = ApiConstant.API_BASE_URL + '/reactive-upload';
  /** File extension that accepted, same as 'accept' of <input type="file" />.
      By the default, it's set to 'image/*'. */
  @Input() accept = 'image/*';
  /** Allow you to add handler after its completion. Bubble up response text from remote. */
  @Output() complete = new EventEmitter<string>();

  public files: Array<FileUpload> = [];
  public uploadedImage: string;
  public fileUri: string;

  field: FieldConfig;
  group: FormGroup;
  constructor(private _http: HttpClient) { }
  ngOnInit() { }
  onClick() {
    const fileUpload = document.getElementById(this.field.name) as HTMLInputElement;
    fileUpload.onchange = () => {
          for (let index = 0; index < fileUpload.files.length; index++) {
                const file = fileUpload.files[index];
                this.files.push({ data: file, state: 'in',
                  inProgress: false, progress: 0, canRetry: false, canCancel: true });
          }
          this.uploadFiles();
    };
    fileUpload.click();
  }

  cancelFile(file: FileUpload) {
      file.sub.unsubscribe();
      this.removeFileFromArray(file);
  }

  retryFile(file: FileUpload) {
      this.uploadFile(file);
      file.canRetry = false;
  }

  private uploadFile(file: FileUpload) {
      const fd = new FormData();
      fd.append(this.param, file.data);

      const req = new HttpRequest('POST', this.target, fd, {
            reportProgress: true
      });

      file.inProgress = true;
      file.sub = this._http.request(req).pipe(
            map(event => {
                  switch (event.type) {
                        case HttpEventType.UploadProgress:
                              file.progress = Math.round(event.loaded * 100 / event.total);
                              break;
                        case HttpEventType.Response:
                              return event;
                  }
            }),
            tap(message => { }),
            last(),
            catchError((error: HttpErrorResponse) => {
                  file.inProgress = false;
                  file.canRetry = true;
                  return of(`${file.data.name} upload failed.`);
            })
      ).subscribe(
            (event: any) => {
                  this.uploadedImage = event.body.fileContent;
                  if (typeof (event) === 'object') {
                        this.fileUri = event.body.fileUri;
                        this.removeFileFromArray(file);
                        this.complete.emit(event.body);
                        localStorage.setItem(this.field.name, this.fileUri);
                  }
            }
      );

  }

  private uploadFiles() {
      const fileUpload = document.getElementById(this.field.name) as HTMLInputElement;
      fileUpload.value = '';

      this.files.forEach(file => {
            this.uploadFile(file);
      });
  }

  private removeFileFromArray(file: FileUpload) {
      const index = this.files.indexOf(file);
      if (index > -1) {
            this.files.splice(index, 1);
      }
  }
}
