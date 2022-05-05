import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuserservice.service';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-login',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserLoginComponent implements OnInit {
user:User=new User();
  constructor(private loginuserservice:LoginuserService) { }
  ngOnInit() {
  }
  userlogin(){
    console.log(this.user)
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      alert("login successfully")
    },error=>alert("sorry please enter correct userid and password"));
   
  }
}
