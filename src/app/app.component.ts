import { AuthService } from './auth/auth.service';
import { Component, OnInit } from '@angular/core';
// import {post} from './Posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private AuthService:AuthService){}
 ngOnInit(){
  this.AuthService.autoAuthAdmin()
 }
}
