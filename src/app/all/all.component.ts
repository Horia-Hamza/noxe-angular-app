import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
MoviesService
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  allMovies:any=[];
  imageBase:string='https://image.tmdb.org/t/p/w500'
  constructor(private _MoviesService:MoviesService) { }

  ngOnInit(): void {
    this._MoviesService.getTrending('all').subscribe({
      next:(movieResponse)=> this.allMovies = movieResponse.results
    })
  }

}
