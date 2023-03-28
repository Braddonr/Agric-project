import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = new User();
  msg = "";
  data = "";

  public email: any;

  constructor(private auth: AuthService, private http: HttpClient, private router: Router) { }


  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.registerForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  registerForm = new FormGroup({

    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    phoneNumber: new FormControl('', [
      Validators.required,

        // Validators.pattern(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
    ]),
    confirmPassword: new FormControl('', [Validators.required, this.confirmationValidator]),

  })

  registerUser() {
    this.http.post<any>("https://digitalfarming.herokuapp.com/api/v1/user/registerNewUser", this.registerForm.value)
      .subscribe(
        (res) => {
          this.auth.setPhoneNumber(this.registerForm.get('phoneNumber')?.value);
          const { status } = res;
          if (status === 200) {
            this.router.navigate(['/shared/registration']);
            alert("Registration completed Successfully!");
          }},
        (error) => {
          console.error(error);
          if (error.error && error.error.message) {
            alert(error.error.message);
          } else {
            alert("An error occurred. Please try again later.");
          }
          this.router.navigate(['/shared/register']);
        }
      );
  }
}


