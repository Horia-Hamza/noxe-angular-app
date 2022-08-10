import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AllComponent } from './all/all.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { PrivacyComponent } from './settings/privacy/privacy.component';
import { ProfileComponent } from './settings/profile/profile.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  {path:'', redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'movies' , component:MoviesComponent},
  {path:'tv' , component:TvComponent},
  {path:'people' , component:PeopleComponent},
  {path:'all' , component:AllComponent},

  {path:'movieDetails/:id' , component:MovieDetailsComponent},
 
  // lazy routing
  {path:"settings" , loadChildren:()=>import('./settings/settings.module').then((x)=>x.SettingsModule) },
  {path:'register' , component:RegisterComponent},
  {path:'login' , component:LoginComponent},
  {path:'**' , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
