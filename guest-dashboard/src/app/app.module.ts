import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PostService } from './services/post.service';
import { SafePipe } from './shared/safe.pipe';
import { PostComponent } from './components/post/post.component';
import { ScriptService } from './services/script.service';

const routes: Routes = [
  {
    path: ':postName', component: PostComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SharedModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    ScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
