import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Starship, StarshipList } from '../interfaces/starship';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  private starshipsListUrl: string = "https://swapi.dev/api/starships";

  httpClient = inject(HttpClient);

  getAll(url: string = this.starshipsListUrl): Observable<StarshipList>{
    return this.httpClient.get<StarshipList>(url);
  }

  getIdForUrl(url: String): string{
    return url.replace(this.starshipsListUrl,"").replaceAll('/','');
  }

  getById(id: string){
    return this.httpClient.get<Starship>(this.starshipsListUrl+'/'+id);
  }
  
}
