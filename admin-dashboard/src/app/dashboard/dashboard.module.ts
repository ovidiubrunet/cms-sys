import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardAppComponent } from './dashboard-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { HttpClientModule } from '@angular/common/http';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { EventRegistrationDetailComponent } from './event-registration/event-registration-detail.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { SharedModule } from '../shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { SafePipe } from '../shared/safe.pipe';
import { AuthGuard } from '../guards/auth.guard';
import { PostsDataSourceService } from './services/posts-data-source.service';
import { AddPostComponent } from './posts/add/add-post.component';
import { PostListComponent } from './posts/list/post-list.component';
import { PostDetailComponent } from './posts/detail/post-detail.component';
import { ConfirmationDialogComponent } from './posts/delete/confirmation-dialog.component';
import { FormModule } from '../form/form.module';
import { AddPostAlertComponent } from './posts/add-post-alert/add-post-alert.component';
import { EditPostComponent } from './posts/edit/edit-post.component';

declare var $: any;
const routes: Routes = [
  {
    path: '', component: DashboardAppComponent,
    children: [
      {canActivate: [AuthGuard],  path: 'posts', component: PostListComponent },
      {canActivate: [AuthGuard],  path: 'add-post', component: AddPostComponent },
      {canActivate: [AuthGuard],  path: 'post/edit/:id', component: EditPostComponent },
      {canActivate: [AuthGuard],  path: 'post/:id', component: PostDetailComponent },
      {canActivate: [AuthGuard],  path: 'event-registration', component: EventRegistrationComponent },
      {canActivate: [AuthGuard],  path: 'event-registration/:id', component: EventRegistrationDetailComponent },
      {canActivate: [AuthGuard],  path: '', component: PostListComponent }

    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormModule
  ],
  providers: [
    UserService,
    PostService,
    CookieService,
    PostsDataSourceService
  ],
  declarations: [
    DashboardAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    PostListComponent,
    PostDetailComponent,
    EventRegistrationComponent,
    EventRegistrationDetailComponent,
    ConfirmationDialogComponent,
    AddPostComponent,
    AddPostAlertComponent,
    EditPostComponent
  ],
  exports: [
  ],
  entryComponents: [
    ConfirmationDialogComponent,
    AddPostAlertComponent
  ]
})


export class DashboardModule { }
