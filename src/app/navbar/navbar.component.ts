import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userInfo:any={};
isLogin:boolean=false;
  constructor(private _AuthService:AuthService) { }
  logOut(){
    this._AuthService.signOut();
  }
  ngOnInit(): void {
 
    this._AuthService.userData.subscribe({
    next:()=>{
    if(this._AuthService.userData.getValue() !=null){
    this.userInfo = this._AuthService.userData;
     this.isLogin=true;
    }   
    else{
      this.isLogin=false;
    }
    }
    })
  }

}
