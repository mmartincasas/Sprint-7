import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  authService = inject(AuthService);
  router = inject(Router);
  showLogoutMessage = false;

  onLogout(){

    this.authService.logout();
    

    const modalElement = document.getElementById('logoutModal');
    const bootstrap: any = (window as any).bootstrap;
    

    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();

      setTimeout(() => {
        modal.hide();
        this.router.navigateByUrl('');
      }, 3000);
    }
  }

}
