import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatSnackBar } from '@angular/material';
import { tap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { merge, fromEvent } from 'rxjs';
import {
  CdkDragDrop
} from '@angular/cdk/drag-drop';
import { Post } from '../../models/post';
import { Reorder } from '../../models/reorder';
import { PostService } from '../../services/post.service';
import { PostsDataSourceService } from '../../services/posts-data-source.service';
import { ConfirmationDialogComponent } from '../delete/confirmation-dialog.component';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-posts',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, AfterViewInit {
  posts: Post[] = [];
  post: Post;
  reorder: Reorder = new Reorder();
  errorMessage: string;
  constructor(
    private postService: PostService,
     public dialog: MatDialog,
     public postDataSourceService: PostsDataSourceService,
     public notificationService: NotificationService
     ) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input: ElementRef;

  displayedColumns = [
    'datePosted',
    'name',
    'actions',
    'url'
  ];

  openDeleteDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      height: '220px',
      width: '368px',
      data: 'Delete Confirmation'
    });

    dialogRef.componentInstance.event.subscribe(result => {
      this.postService.deletePost(id).subscribe(data => {
        this.postDataSourceService.loadPosts();
      });
    });
  }


  ngOnInit() {
    // set progress bar
    this.postDataSourceService.loadingSubject.next(true);
    this.postDataSourceService = new PostsDataSourceService(this.postService, this.notificationService);
    this.postDataSourceService.loadPosts();
  }

  /**
   * afterViewInit
   */
  ngAfterViewInit() {

    // reset the paginator after sorting
    if (this.sort) {
      this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

      fromEvent(this.input.nativeElement, 'keyup')
        .pipe(
          debounceTime(150),
          distinctUntilChanged(),
          tap(() => {
            this.paginator.pageIndex = 0;

            this.loadPostsPage();
          })
        )
        .subscribe();

      merge(this.sort.sortChange, this.paginator.page)
        .pipe(
          tap(() => {
            this.loadPostsPage();
          })
        )
        .subscribe();
    }
  }


  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }


  /**
   * filter
   */
  loadPostsPage() {
    this.postDataSourceService.loadPosts(
      this.input.nativeElement.value.trim().toLowerCase(),
      this.sort.direction,
      this.paginator.pageIndex,
      this.paginator.pageSize,
      this.sort.active
    );
  }

  goToPage(url: string) {
    window.open(url, '_blank');
  }

  drop(event: CdkDragDrop<string[]>) {
    // event.previousContainer._draggables.forEach(function (value) {
    //   console.log(value.data);

    // });

    this.posts = event.previousContainer._draggables.map(item => {
      return item.data;
    });

    // inversed
    this.reorder.currentPost = this.posts[event.previousIndex];
    this.reorder.previousPost = this.posts[event.currentIndex];

    this.postService.saveOrder(this.reorder).subscribe(data => {
      // This code will be executed when the HTTP call returns successfully
      this.postDataSourceService.loadPosts();
    });
  }
}
