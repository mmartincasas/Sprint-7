import { Routes } from '@angular/router';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'starship-list', component: StarshipListComponent, canActivate: [authGuard]},
    {path: 'starship-details/:id', component: StarshipDetailsComponent, canActivate: [authGuard]},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: ''}
];
