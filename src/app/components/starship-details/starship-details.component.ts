import { Component, inject, Input } from '@angular/core';
import { Starship, Pilot, Film } from '../../interfaces/starship';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StarshipsService } from '../../services/starships.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss'
})
export class StarshipDetailsComponent {

  starship! : Starship;
  arrFilms: Film[] = [];
  arrPilots: Pilot[] = [];
  id!: string;
  
  starshipsService = inject(StarshipsService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(){

    this.id = this.route.snapshot.params['id'];

    console.log("ID:", this.id);

    if (this.id){
      this.starshipsService.getStarshipById(this.id).subscribe(
        (data: Starship) => {
            this.starship = data;
            this.getPilots();
            this.getFilms();
      })
    }
  }

  getPilots() {
    this.starship.pilots.forEach((pilotUrl, index) => {
      this.starshipsService.getPilot(pilotUrl).subscribe(pilotData => {

        pilotData.id = Number(this.starshipsService.getPilotId(this.starship.pilots[index]));

        this.arrPilots.push(pilotData);
      });
    });
  }

  getFilms() {
    this.starship.films.forEach((filmUrl, index) => {
      this.starshipsService.getFilm(filmUrl).subscribe(filmData => {

        filmData.id = Number(this.starshipsService.getFilmId(this.starship.films[index]));

        this.arrFilms.push(filmData);
      });
    });
  }


}
