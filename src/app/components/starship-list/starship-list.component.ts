import { Component, inject } from '@angular/core';
import { Starship, StarshipList } from '../../interfaces/starship';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-starship-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starship-list.component.html',
  styleUrl: './starship-list.component.scss'
})
export class StarshipListComponent {

  arrStarships: Starship [] = [];

  starshipsService = inject(StarshipsService);
  route = inject(ActivatedRoute);

  ngOnInit(){
    this.starshipsService.getAll().subscribe((data: StarshipList) => {
      this.arrStarships = data.results;

      /*CONSOLE.LOG ARRAY STARSHIPS */
      console.log(this.arrStarships);
    })
  }

}
