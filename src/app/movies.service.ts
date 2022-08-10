import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient ) { }
  getTrending(media:string ):Observable<any>{
  return  this._HttpClient.get(`https://api.themoviedb.org/3/trending/${media}/week?api_key=d5d736319f5aeae04d8589ffa0da7c5e`)
  }
  getMoviesDetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}%7D?api_key=d5d736319f5aeae04d8589ffa0da7c5e&language=en-US`)

  }
  getpagination(media:string , page:number ):Observable<any>{
    return  this._HttpClient.get(`https://api.themoviedb.org/3/discover/${media}?api_key=d5d736319f5aeae04d8589ffa0da7c5e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
    }

}
