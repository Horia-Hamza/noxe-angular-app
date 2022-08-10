
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  pagesNumber:number=10;
  pages:number[]=[];
  imageBase:string='https://image.tmdb.org/t/p/w500'
  trendingMovies:any=[];
  term:string='';
  constructor(private _MoviesService:MoviesService) {}

  ngOnInit(): void {
this.pages=new Array(this.pagesNumber).fill('').map((x,i)=>i+1);


    this._MoviesService.getTrending('movie').subscribe({
      next:(movieResponse)=> this.trendingMovies = movieResponse.results
    })
  }
  
getpage(pageNumber:number){
  this._MoviesService.getpagination('movie',pageNumber).subscribe({
    next:(response)=>this.trendingMovies = response.results
  }
  )
}
}
