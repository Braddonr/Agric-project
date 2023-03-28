
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { __values } from 'tslib';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  
  user = new User();
  msg = "";
  email: any = "";
  data = "";
 
  @Output() enteredEmail = new EventEmitter<string>();

  constructor(private http : HttpClient, private router: Router, private authService: AuthService) {}

  forgotPassForm = new FormGroup({
    email: new FormControl ('', [Validators.email, Validators.required])
    })

  ngOnInit(): void {

    this.authService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data)
    });
    
  //  / this.authService.email.subscribe(
  //     (val : any) => {
  //       this.email= val;
  //       console.log(this.email)
  //     } 
  //   )

  }
}
