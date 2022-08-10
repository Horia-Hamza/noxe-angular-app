import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

callToggilePsw(){
this._AuthService.toggilePsw();
}
  constructor(private _AuthService:AuthService , public _Router:Router) {

   }
  isLoading:boolean=false;
  errorMessage:string='';
registerForm:FormGroup = new FormGroup({
  "first_name":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  "last_name":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  "age":new FormControl(null,[Validators.required,Validators.min(10),Validators.max(50)]),
  "email":new FormControl(null,[Validators.required,Validators.email]),
  "password":new FormControl(null,[Validators.required,Validators.pattern(/^[a-z][0-9]{3}$/)]),

})



submitForm(registerForm:FormGroup){
  this.isLoading=true;
  if(registerForm.valid){
    this._AuthService.signUp(registerForm.value).subscribe({
      next:(response)=>{
        if(response.message === 'success'){
          // navigat to login|home
          this.isLoading=false;
          this._Router.navigate(['/login'])
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
