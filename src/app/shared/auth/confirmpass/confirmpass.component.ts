import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-confirmpass',
  templateUrl: './confirmpass.component.html',
  styleUrls: ['./confirmpass.component.css']
})
export class ConfirmpassComponent implements OnInit {
  public phoneNumber!: number;
  
  user = new User();

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.phoneNumber = this.auth.phoneNumber;
    
  }
   phoneForm = new FormGroup({
    phoneNumber: new FormControl('', [
      Validators.required,
      // Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
    ]),
  })

  phoneVerify(): void{ 
    this.http.post<any>("https://digitalfarming.herokuapp.com/api/v5/otp/sendingOtpToUserViaSMS", this.phoneForm.value)
    .subscribe 
    (res => {
      const { status } = res;
      if (status === 200) {
        this.router.navigate(['/shared/confirmpass']);
        alert("We have sent an OTP code to " + this.phoneForm.value.phoneNumber + ", please enter it in the space provided");
      }},
      (error) =>{
        console.error(error);
        if(error.error && error.error.message){
          alert(error.error.message)
        }
        else{
          alert ("Something went wrong.");
        } 
        this.router.navigate(['/shared/confirmpass'])
      }
     
      )
  }

  otpForm = new FormGroup({
    otp: new FormControl('', [
      Validators.required,
      Validators.maxLength(6),
      Validators.minLength(6)
    ]),
  })

  otpVerify(): void{
    this.http.post<any>("https://digitalfarming.herokuapp.com/api/v5/otp/verifyingOtp", this.otpForm.value)
    .subscribe
    (res => {
      const {status} = res
      console.log(res);
      if(status === 200){
        alert("The Phone Number, " + this.phoneForm.value.phoneNumber + " has been verified successfully! Click OK to login");
        this.router.navigate(['/shared/login']);
      }},
      (error) =>{
        console.error(error);
        if(error.error && error.error.message){
          alert(error.error.message)
        }
        else{
          alert ("Something went wrong.");
        } 
        this.router.navigate(['/shared/confirmpass'])
      }
     
      )
  }


  resendOtp(): void{
    this.http.post<any>("https://digitalfarming.herokuapp.com/api/v5/otp/resendingOtp?oldOtp={otp}", this.phoneForm.value)
    .subscribe(res =>{
      const {status} = res 
      if(status === 200){
        this.router.navigate(['/shared/login'])
      }

    })

  }

 
  getPhoneNumber() {
    return this.http.get<any>(`https://digitalfarming.herokuapp.com/api/v1/user/UserPhoneNumberDisplay/${this.phoneForm.value}`,)
    .pipe(map((res: any) =>{
      return res;

      }))
   }
}


