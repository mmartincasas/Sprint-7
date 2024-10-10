import { Component, inject, Input } from '@angular/core';
import { Starship } from '../../interfaces/starship';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { StarshipsService } from '../../services/starships.service';


@Component({
  selector: 'app-starship-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starship-details.component.html',
  styleUrl: './starship-details.component.scss'
})
export class StarshipDetailsComponent {

  starship! : Starship;
  id!: string;
  
  starshipsService = inject(StarshipsService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(){

    this.id = this.route.snapshot.params['id'];

    /*ID*/
    console.log("ID:", this.id);

    /*Pendiente el CONTROL DE ERRORES*/
    if (this.id){
      this.starshipsService.getById(this.id).subscribe(
        (data: Starship) => {
            this.starship = data;
      })
    }
  }

}
