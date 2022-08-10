import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
trendingMovies:any=[];
trendingTv:any=[];
trendingPerson:any=[];
imageBase:string='https://image.tmdb.org/t/p/w500'
personPath:string='/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg'
personName:string='Tom Cruise'
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrending('movie').subscribe({
      next:(movieResponse)=> this.trendingMovies = movieResponse.results.slice(0,10)
    })

    this._MoviesService.getTrending('tv').subscribe({
      next:(movieResponse)=> this.trendingTv = movieResponse.results.slice(0,10)
    })

    this._MoviesService.getTrending('person').subscribe({
      next:(movieResponse)=> { for (let i = 0; i< movieResponse.results.length; i++) 
        {
       if(movieResponse.results[i].profile_path ==null )
       {
        movieResponse.results[i].profile_path=this.personPath
       }
       if(movieResponse.results[i].name ==null )
       {
        movieResponse.results[i].name=this.personName
       }
      }
      this.trendingPerson = movieResponse.results.slice(0,10)
    }
  
  })
  }

}
