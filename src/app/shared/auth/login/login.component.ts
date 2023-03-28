import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { RegistrationService } from '../registration.service';
import { User } from '../user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 
 msg = "";
 public isInvalid !: boolean;
 response: any;
 token: any;
 public user: SocialUser = new SocialUser;



 constructor(private http : HttpClient, private router: Router, private authService: SocialAuthService) {localStorage.clear() }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.authService.authState.subscribe(user => {
      this.user = user;
      console.log(user);
  });
}

  loginForm = new FormGroup({
      username: new FormControl ('', Validators.required),
      password: new FormControl ('', Validators.required),
    })

loginUser(): void{
  //  var isChecked = true;
  //  if(this.loginForm.valid){
  //   for(var a in this.loginForm.controls){
  //     this.loginForm.controls[a].markAsDirty();
  //     this.loginForm.controls[a].updateValueAndValidity();
  //     isChecked = false;
  //   }

  this.http.post<any>("https://digitalfarming.herokuapp.com/api/v1/user/authenticate", this.loginForm.value)
  .subscribe(res => {
    this.token= res;
   console.log(this.token)
   
   localStorage.setItem('token', this.token)
   alert("Log in successful");
   this.loginForm.reset();
   this.router.navigate(['/shared/landingpage']);
  },
  error => {
   this.msg = "Incorrect username or password!"
  });
   
}

// get username(){
//   return this.loginForm.get('email') 
// }

public signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
}
public signOut(): void {
  this.authService.signOut();
}

}


