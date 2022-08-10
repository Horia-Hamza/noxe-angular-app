import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  callToggilePsw(){
    this._AuthService.toggilePsw();
    }
  constructor(private _AuthService:AuthService , public _Router:Router) { }

  isLoading:boolean=false;
  errorMessage:string='';
  logInForm:FormGroup = new FormGroup({
  "email":new FormControl(null,[Validators.required,Validators.email]),
  "password":new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)]),
})

submitForm(logInForm:FormGroup){
  this.isLoading=true;
  if(logInForm.valid){
    this._AuthService.signIn(logInForm.value).subscribe({
      next:(response)=>{
        if(response.message === 'success'){
          // navigat to login|home
          this.isLoading=false;
          localStorage.setItem('userToken' , response.token);
          this._AuthService.getUserData()
          this._Router.navigate(['/home'])
        }
        else{
          // show error
          this.isLoading= false;
          this.errorMessage = response.message;
        }
      }
    })
  }
}



  ngOnInit(): void {
  }

}
