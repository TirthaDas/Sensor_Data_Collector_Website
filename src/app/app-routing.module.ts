import { AnswersComponent } from './answers/answers.component';
import { AuthGuard } from './auth/auth.gaurd';
import {NgModule} from "@angular/core"; 
import {RouterModule,Routes} from"@angular/router";
import { PostListComponent } from './Posts/post-list/post-list.component';
import { PostCreateComponent } from './Posts/post-create/post-create.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SensordataComponent } from './sensordata/sensordata.component';

const route:Routes=[
    {path:'',component:PostListComponent},
    {path:'create',component:PostCreateComponent,canActivate:[AuthGuard]},
    {path:'edit/:postId',component:PostCreateComponent,canActivate:[AuthGuard]},
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'sensordata/:postId',component:SensordataComponent,canActivate:[AuthGuard]},
    {path:'answerdata/:postId',component:AnswersComponent,canActivate:[AuthGuard]},





]
@NgModule({
imports:[RouterModule.forRoot(route)],
exports:[RouterModule],
providers:[AuthGuard]
})
export class AppRoutingModule{

}