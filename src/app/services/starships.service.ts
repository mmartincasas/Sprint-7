import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StarshipList } from '../interfaces/starship';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private StarshipsUrl: string = "https://swapi.dev/api/starships";

  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<StarshipList>(this.StarshipsUrl);
  }

  getById(id: number){
    return this.httpClient.get<StarshipList>(this.StarshipsUrl+'/'+id);
  }
  
}
