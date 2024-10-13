import { Component, inject } from '@angular/core';
import { Starship} from '../../interfaces/starship';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StarshipsService } from '../../services/starships.service';
import { PilotsComponent } from "../pilots/pilots.component";
import { FilmsComponent } from "../films/films.component";


@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [CommonModule, PilotsComponent, FilmsComponent],
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss'
})
export class StarshipDetailsComponent {

  starship! : Starship;
  id!: string;
  StarshipError = false;
  isLoading = false;
  
  starshipsService = inject(StarshipsService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(){

    this.id = this.route.snapshot.params['id'];


    
      
      

      if (this.id) {
        this.isLoading=true;
        this.starshipsService.getStarshipById(this.id).subscribe({
          next: (data: Starship) => {
            this.starship = data;
            this.StarshipError = false;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Error fetching starship data:', error);
            this.StarshipError = true;
            this.isLoading = false;
          }
        });
      }
      
      
      
      
      
    


    



  }





}
