import { Component, HostListener, inject, signal } from '@angular/core';
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

  arrStarships = signal<Starship[]>([]);
  nextUrl = signal<string | null>(null);
  isLoading = signal<boolean>(false);
  hasMore = signal<boolean>(true);
  initUrl: string = 'https://swapi.dev/api/starships';

  starshipsService = inject(StarshipsService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(){
    this.loadMoreStarships();
  }

  
  loadMoreStarships(): void {
    if (this.isLoading() || !this.hasMore()) {
      return;
    }

    this.isLoading.set(true); 
    const currentUrl = this.nextUrl() || this.initUrl; 

    this.starshipsService.getAll(currentUrl).subscribe((data: StarshipList) => {
      
      this.arrStarships.update(starships => [...starships, ...data.results]);
      this.isLoading.set(false); 

      if (!data.next) {
        this.hasMore.set(false);
      }

      this.nextUrl.set(data.next); 

    });
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.scrollHeight - 100;

    if (scrollPosition >= threshold) {
      this.loadMoreStarships();
    }
  }


  openStarshipDetails (url: string){
    const id = this.starshipsService.getStarshipId(url);   
    this.router.navigate(['starship-details',id])
  }


}
