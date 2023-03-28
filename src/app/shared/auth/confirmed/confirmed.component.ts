import { group, state } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html'
})

export class ConfirmedComponent {

  phoneForm!: FormGroup;
 
 constructor(private formBuilder: FormBuilder, private auth: AuthService, private http: HttpClient, private router: Router) { }


 ngOnInit(){
  this.phoneForm = this.formBuilder.group({
    sellerName:new FormControl('', [<any>Validators.required]),
 })
 }


  // phoneForm = new FormGroup({
  //   phoneNumber :  new FormControl('', Validators.required)
  // })

  phoneVerify(): void{ 
    this.http.post<any>("http://localhost:7021/api/v5/otp/sendingOtpToUserViaSMS", this.phoneForm.value)
    .subscribe(res =>{
      const  { status } = res
      if (status === 200) {
        this.router.navigate(['/'])
      }
    })
  }

 
 
}

