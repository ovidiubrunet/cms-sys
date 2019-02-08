import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable} from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { PostsApiResponse } from '../models/posts-api-response';
import { ApiConstant } from './api.constant';
import { AuthService } from 'src/app/auth/_service/auth.service';
import { Reorder } from '../models/reorder';
import { HttpError } from 'src/app/exception/http-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  categories = [
    { value: 'Web-Development', viewValue: 'Web Development' },
    { value: 'Android-Development', viewValue: 'Android Development' },
    { value: 'IOS-Development', viewValue: 'IOS Development' }
  ];

  private token: string;
  private authorization: string;


  constructor(
     private http: HttpClient,
     private authService: AuthService,
     private httpError: HttpError) {
  }

  getHeaders(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.set('Authorization', 'Bearer ' + this.token);

    return headers;
  }
  /**
   * token header used for secured resources
   */
  getTokenHeader(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    this.token = this.authService.getToken().access_token;

    headers = headers
      .set('Authorization', 'Bearer ' + this.token);

    return headers;
  }

  /**
   * authorization header used for oauth2 endpoints
   */
  getAuthorizationHeader(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    this.authorization = this.authService.getAuthorization();

    headers = headers
      .set('Authorization', 'Basic ' + this.authorization);

    return headers;
  }

  /**
  *  header with basic and bearer used for oauth2 and resources endpoints
  */
  getAuthorizationAndTokenHeader(): HttpHeaders {
    let headers: HttpHeaders = new HttpHeaders();
    this.authorization = this.authService.getAuthorization();

    headers = headers
      .set('Authorization', 'Basic ' + this.authService.getAuthorization() + ', ' + 'Bearer ' + this.authService.getToken().access_token);

    return headers;
  }

  /**
   *
   * @param post post
   */
  addPost(post: Post): Observable<Post> {
    const headers = this.getAuthorizationAndTokenHeader();
    return this.http
      .post<Post>(ApiConstant.API_BASE_URL + '/secured/posts', post, {
        headers
      })
      .pipe(
        tap((posts: Post) => console.log('save post')),
        catchError(this.httpError.handleError)
      );
  }

  /**
   * @param reorder save order
   */
  saveOrder(reorder: Reorder): Observable<Reorder> {
    const headers = this.getAuthorizationAndTokenHeader();
    const url = ApiConstant.API_BASE_URL + '/secured/posts/reorder';
    console.log(url);
    return this.http.post<Reorder>(url, reorder, { headers }).pipe(
      tap((posts: Reorder) => console.log('save post')),
      catchError(this.httpError.handleError)
    );
  }


  getPost(id: number): Observable<Post> {

    const url = ApiConstant.API_BASE_URL + `/secured/posts/` + id;
    const headers = this.getAuthorizationAndTokenHeader();

    return this.http
      .get<Post>(url, {headers})
      .pipe(tap(data => console.log('post:' + JSON.stringify(data))));
  }

  getPosts(
    filter = '',
    sort = 'ASC',
    pageNumber = 1,
    pageSize = 3,
    order = 'postPositionIdx.position'
  ): Observable<PostsApiResponse> {

    const url = ApiConstant.API_BASE_URL + `/secured/posts`;
    const headers = this.getAuthorizationAndTokenHeader();
    return this.http
      .get<PostsApiResponse>(url, {
        params: new HttpParams()
          .set('order', order)
          .set('filter', filter)
          .set('sort', sort)
          .set('pageNumber', pageNumber.toString())
          .set('pageSize', pageSize.toString()),
          headers
      })
      .pipe(
        tap(data => console.log(data)),
        catchError(this.httpError.handleError)
      );
  }

  getCategories() {
    return this.categories;
  }

  deletePost(id: number): Observable<Post> {
    const url = ApiConstant.API_BASE_URL + `/secured/posts/${id}`;
    const headers = this.getAuthorizationAndTokenHeader();

    return this.http.delete<Post>(url, { headers }).pipe(
      tap(data => console.log(data)),
      catchError(this.httpError.handleError)
    );
  }

  updatePost(post: Post): Observable<Post> {
    console.log('Edit post');
    const url = ApiConstant.API_BASE_URL + `/secured/posts/${post.id}`;
    const headers = this.getAuthorizationAndTokenHeader();
    return this.http.put<Post>(url, post, { headers }).pipe(
      tap((posts: Post) => console.log('update post')),
      catchError(this.httpError.handleError)
    );
  }
}
