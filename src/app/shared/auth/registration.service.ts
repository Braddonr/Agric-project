import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  loginUser: any;
  registerUser: any;

  constructor(private http: HttpClient) { }

  // public loginUserFromRemote(): Observable<any>{
  // return this.http.post<any>("", this.loginUser.value)
  // }

  // public registerUserFromRemote(): Observable<any>{
  //   return this.http.post<any>("https://agritecheclectics.herokuapp.com/api/v1/user/register", this.registerUser.value);
  // }
}
