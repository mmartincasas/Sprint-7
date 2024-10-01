import { Routes } from '@angular/router';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';

export const routes: Routes = [
    {path: '', component: StarshipListComponent},
    {path: 'starship-details/:id', component: StarshipDetailsComponent},
    {path: '**', redirectTo: ''}
];
