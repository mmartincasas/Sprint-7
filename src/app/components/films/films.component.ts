import { Component, inject, Input } from '@angular/core';
import { Starship, Film } from '../../interfaces/starship';
import { StarshipsService } from '../../services/starships.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.scss'
})
export class FilmsComponent {

  @Input() starship!: Starship;   
  arrFilms: Film[] = [];

  starshipsService = inject(StarshipsService);

  ngOnInit(){
    this.getFilms();
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
