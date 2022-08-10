import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  imageBase:string='https://image.tmdb.org/t/p/w500'
  movieId:string=''
movieDetails:any
  constructor(private _MoviesService:MoviesService, private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.movieId = this._ActivatedRoute.snapshot.params['id']
  this._MoviesService.getMoviesDetails(this.movieId).subscribe({
    next:(detailsResponse)=>{
      this.movieDetails = detailsResponse
      // console.log(this.movieDetails);
      
    }
  })
  }

}
