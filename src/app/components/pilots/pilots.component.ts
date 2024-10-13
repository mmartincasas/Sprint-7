import { Component, inject, Input } from '@angular/core';
import { Starship, Pilot } from '../../interfaces/starship';
import { StarshipsService } from '../../services/starships.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pilots',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pilots.component.html',
  styleUrl: './pilots.component.scss'
})
export class PilotsComponent {

  @Input() starship!: Starship; 
  arrPilots: Pilot[] = [];

  starshipsService = inject(StarshipsService);

  ngOnInit(){
    this.getPilots();
  }

  getPilots() {
    this.starship.pilots.forEach((pilotUrl, index) => {
      this.starshipsService.getPilot(pilotUrl).subscribe(pilotData => {

        pilotData.id = Number(this.starshipsService.getPilotId(this.starship.pilots[index]));

        this.arrPilots.push(pilotData);
      });
    });
  }

}
