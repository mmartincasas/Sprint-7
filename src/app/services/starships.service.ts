import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Starship, StarshipList, Pilot, Film } from '../interfaces/starship';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private starshipsListUrl: string = "https://swapi.dev/api/starships";
  private pilotUrl: string = "https://swapi.dev/api/people";
  private filmUrl: string = "https://swapi.dev/api/films/";

  httpClient = inject(HttpClient);

  getAll(url: string = this.starshipsListUrl): Observable<StarshipList>{
    return this.httpClient.get<StarshipList>(url);
  }

  getStarshipId(url: string): string{
    return url.replace(this.starshipsListUrl,"").replaceAll('/','');
  }

  getStarshipById(id: string){
    return this.httpClient.get<Starship>(this.starshipsListUrl+'/'+id);
  }

  getPilotId(url: string): string{
    return url.replace(this.pilotUrl,"").replaceAll('/','');
  }

  getPilot(url: string): Observable<Pilot>{
    return this.httpClient.get<Pilot>(url);
  }

  getFilmId(url: string): string{
    return url.replace(this.filmUrl,"").replaceAll('/','');
  }

  getFilm(url: string): Observable<Film>{
    return this.httpClient.get<Film>(url);
  }
  
}
