import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { Observable, BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:any= new BehaviorSubject(null);

  getUserData(){
    let inDecodedToken=JSON.stringify(localStorage.getItem('userToken'));
    let decodedToken =jwtDecode(inDecodedToken);
    this.userData.next(decodedToken);
    console.log(this.userData)
  }

  constructor(private _HttpClient:HttpClient ,private _Router:Router) {


    if(localStorage.getItem('userToken')){
      this.getUserData();
    }
   }
  signUp(formData:object):Observable<any>{
   return this._HttpClient.post('https://routeegypt.herokuapp.com/signup',formData)
  }

  signIn(formData:object):Observable<any>{
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signin',formData)
   }

   signOut(){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['login']);
   }
   psw:any;

   toggilePsw() {
    this.psw = document.getElementById("psw");
    if ( this.psw.type === "password") {
      this.psw.type = "text";
    } else {
      this.psw.type = "password";
    }
  }
 

}

