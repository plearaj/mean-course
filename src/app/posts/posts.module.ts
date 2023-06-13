import {NgModule} from "@angular/core";
import {PostListComponent} from "./post-list/post-list.component";
import {PostCreateComponent} from "./post-create/post-create.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularMaterialModule} from "../angular-material.module";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../auth/auth-interceptor";
import {ErrorInterceptor} from "../error.interceptor";

@NgModule({
  declarations: [
    PostListComponent,
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    RouterModule
  ]
})
export class PostsModule {}
