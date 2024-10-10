import { Routes } from '@angular/router';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'starship-list', component: StarshipListComponent},
    {path: 'starship-details/:id', component: StarshipDetailsComponent},
    {path: '**', redirectTo: ''}
];
