import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { PostService } from './post.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { PostsApiResponse } from '../models/posts-api-response';
import { NotificationService } from 'src/app/service/notification.service';

@Injectable()
export class PostsDataSourceService implements DataSource<Post> {

    private postsSubject = new BehaviorSubject<Post[]>([]);
    public loadingSubject = new BehaviorSubject<boolean>(true);
    private countSubject = new BehaviorSubject<number>(0);

    public loading$ = this.loadingSubject.asObservable();
    public count$ = this.countSubject.asObservable();

    constructor(
        private postsService: PostService,
        private notificationService: NotificationService
        ) {}

    connect(collectionViewer: CollectionViewer): Observable<Post[]> {
        return this.postsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.postsSubject.complete();
        this.loadingSubject.complete();
    }

    loadPosts(filter = '', sortDirection = 'ASC', pageIndex = 0, pageSize = 5, order = 'postPositionIdx.position') {

        const subscription  = this.postsService.getPosts(filter, sortDirection,
            pageIndex, pageSize, order).pipe(
            catchError((err) => {
                this.notificationService.openErrorAlert(err, 'close');
                return of([]);
            } ),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe((posts: PostsApiResponse) => {
            this.countSubject.next(posts.count);
            this.postsSubject.next(posts.posts);

        } );

        subscription.add(() =>  this.loadingSubject.next(false));
    }
}
