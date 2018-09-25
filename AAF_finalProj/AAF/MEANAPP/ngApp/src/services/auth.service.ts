import { Injectable } from '@angular/core';
import { Http ,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Token } from '@angular/compiler';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'

})
export class AuthService {
  authToken:any;
  user:any;
  tok=localStorage.getItem("token");

  constructor(private http:Http) { }
  registerUser(user){
    let headers = new Headers();
    headers.append('content-Type','application/json');
    return this.http.post('http://localhost:3000/user/signup',user,{headers:headers})
    .map(res=>res.json());

    
  }
  authenticateUser(user){
    let headers = new Headers();
    headers.append('content-Type','application/json');
    return this.http.post('http://localhost:3000/user/login',user,{headers:headers})
    .map(res=>res.json());
  }
  storeUserData(token , user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken =Token;
    this.user=user; 
  }
  getProfile(){
    let headers  = new Headers();
   
  }
 loggedIn(){
 return tokenNotExpired('id_token');

 }
 
  logout(){
    
      this.authToken=null;
      this.user =null;
      localStorage.clear();
  }
  
}
