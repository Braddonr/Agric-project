
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { ProgressBarService } from 'src/app/shared/services/progress-bar.service';


@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css']
})

export class ResetpassComponent implements OnInit {

  msg = "";

  token: any;

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.resetForm.controls['newPassword'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };


  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, public router: Router, private route: ActivatedRoute, private authService: AuthService, public progressBar: ProgressBarService) { }



  resetForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]),
    confirmNewPassword: new FormControl('', [Validators.required, this.confirmationValidator]),

  })
  // forgotPassForm = new FormGroup({
  //   email: new FormControl ('', [Validators.email, Validators.required])
  //   })

  // ngOnInit(): void {
  // }
  model: any = {};
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); // 
        this.token = params['token'];
        console.log(this.token);
      }
      );

  }

  changePassword() {
    this.authService.changePassword(this.model)
    this.http.put<any>(`https://digitalfarming.herokuapp.com/api/v1/user/forgetPasswordReset/${this.token}`, this.resetForm.value)
      .subscribe
      (res => {
        let message: any;
        message = res['message'];
        alert("Password changed successfully! Click OK to login with your new password");
          this.router.navigate(['/shared/login']);  
      },
      error => {
        this.msg = "something went Wrong!"
       });
  }
}


