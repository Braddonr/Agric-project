import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css']
})


export class ForgotpassComponent {
  token = localStorage.getItem("token");

  

  user = new User();
  msg = "";
  email: string = "";
 
  @Output() enteredEmail = new EventEmitter<string>();

 constructor(private http : HttpClient, private router: Router, private authService: AuthService) {}
  

  forgotPassForm = new FormGroup({
    email: new FormControl ('', [Validators.email, Validators.required])
    })

    
forgotPassword(){
  // this.email = (Object.values(this.forgotPassForm.value)).toString()
  // console.log(this.email);
  // this.enteredEmail.emit(this.email);
  // alert("Check your email for reset link")


  // this.router.navigate(['/shared/resetpass']);
  // this.http.post<any>("https://agritecheclectics.herokuapp.com/api/v1/user/resetPassword", this.forgotPassForm.value)
  // .subscribe(res => {
  //  alert("Check your email for a reset link");
  //  this.forgotPassForm.reset();
   
  //  this.router.navigate(['/shared/resetpass']);
  // },err => {
  //  alert("An error occurred. Try again later")
  //  console.log(err)
  // })


  // this.alertService.info('Working on sending email');
  // this.progressBar.startLoading();
  const resetPasswordObserver = {
    next: (x: any) => {
      // this.progressBar.setSuccess();
      alert ('If a Digital Farming account exists for  '  + this.forgotPassForm.value.email + " we’ll send an email with a link to reset your password.");
      console.log('Check email to change password');
      // this.progressBar.completeLoading();
    },
    error: (err: any) => {
      // this.progressBar.setError();
      console.log(err);
      alert('Unable to send email');
      // this.progressBar.completeLoading();
    }
  };
  this.authService.resetPassword(this.forgotPassForm.value).subscribe(resetPasswordObserver);
}
   
}

// get username(){
//   return this.loginForm.get('email') 
// }

