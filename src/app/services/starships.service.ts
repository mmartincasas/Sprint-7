import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Starship, StarshipList } from '../interfaces/starship';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private starshipsListUrl: string = "https://swapi.dev/api/starships";

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<StarshipList>(this.starshipsListUrl);
  }

  getIdForUrl(url: String): string{
    return url.replace(this.starshipsListUrl,"").replaceAll('/','');
  }

  /*
  getByUrl(starshipUrl: string){
    let id = this.getIdForUrl(starshipUrl);
    return this.httpClient.get<Starship>(this.starshipsListUrl+'/'+id);
  }*/


  getById(id: string){
    return this.httpClient.get<Starship>(this.starshipsListUrl+'/'+id);
  }
  
}
