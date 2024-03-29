import { AuthInterceptor } from './auth/auth-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatSnackBar} from '@angular/material/snack-bar';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatDividerModule
  
} from '@angular/material';

import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './Posts/post-create/post-create.component';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './Posts/post-list/post-list.component';
import { LoginComponent } from './auth/login/login.component'
import { SignupComponent } from './auth/signup/signup.component';
import { SensordataComponent } from './sensordata/sensordata.component';
import { AnswersComponent } from './answers/answers.component'
@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    LoginComponent,
    SignupComponent,
    SensordataComponent,
    AnswersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
