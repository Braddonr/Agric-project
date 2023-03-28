import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  phoneNumber: any;


  public email =  new BehaviorSubject<string>("") ;
  private data =  new BehaviorSubject<string>("") ;


  authUrl = "https://digitalfarming.herokuapp.com/api/v1/user/";
  confirmEmailUrl = "http://localhost:4200/confirm-email/";
  changePasswordUrl = "http://localhost:4200/shared/resetpass/"


  constructor(private http: HttpClient) { }

  isLoggedIn(){
    return !!localStorage.getItem('token');
  }

  resetPassword(model: any) {
    let headers = new HttpHeaders({
      changePasswordUrl: this.changePasswordUrl
    });
    let options = { headers: headers };
    return this.http.post(this.authUrl + "forgetPasswordLink", model, options);
  }

  changePassword(model: any) {
    return this.http.put(this.authUrl+"forgetPasswordLink", model);
  } 

  getData() {
    return this.data.asObservable();
  }

  setData(newData: string) {
    this.data.next(newData);
  }

  setPhoneNumber(phoneNumber: any) {
    this.phoneNumber = phoneNumber;
  }

}