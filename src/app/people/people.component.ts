import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  trendingPerson:any=[];
  personPath:string='/ilPBHd3r3ahlipNQtjr4E3G04jJ.jpg'
  personName:string='Johnny Depp'
  imageBase:string='https://image.tmdb.org/t/p/w500'
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrending('person').subscribe({
      next:(movieResponse)=> { for (let i = 0; i< movieResponse.results.length; i++) 
        {
       if(movieResponse.results[i].profile_path ==null )
       {
        movieResponse.results[i].profile_path=this.personPath
       }
       if(movieResponse.results[i].name ==/[^a-zA-Z]/ )
       {
        movieResponse.results[i].name=this.personName
       }
      }
      this.trendingPerson = movieResponse.results
    }
  
  })
  }

}
