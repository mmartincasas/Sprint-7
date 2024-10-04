import { Component, inject } from '@angular/core';
import { Starship, StarshipList } from '../../interfaces/starship';
import { StarshipsService } from '../../services/starships.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarshipDetailsComponent } from "../starship-details/starship-details.component";


@Component({
  selector: 'app-starship-list',
  standalone: true,
  imports: [CommonModule, StarshipDetailsComponent],
  templateUrl: './starship-list.component.html',
  styleUrl: './starship-list.component.scss'
})
export class StarshipListComponent {

  arrStarships: Starship [] = [];

  starshipsService = inject(StarshipsService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(){
    this.starshipsService.getAll().subscribe((data: StarshipList) => {
      this.arrStarships = data.results;

      /*CONSOLE.LOG ARRAY STARSHIPS */
      console.log(this.arrStarships);
    })
  }

  openStarshipDetails (url: string){
    const id = this.starshipsService.getIdForUrl(url);   
    this.router.navigate(['starship-details',id])
  }


}
