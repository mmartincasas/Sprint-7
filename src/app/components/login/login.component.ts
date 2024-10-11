import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  authService = inject(AuthService);
  router = inject(Router);

  public formLogin: FormGroup;
  public loginError = false;

  constructor(private fb: FormBuilder){
    this.formLogin = this.fb.group({
      'emailLogin': ['', [Validators.required, Validators.email]],
      'passwordLogin': ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onLogIn(){

    this.loginError = false;

    if (this.formLogin.invalid){
      return this.formLogin.markAllAsTouched();
    }

    const {emailLogin, passwordLogin} = this.formLogin.value;

    this.authService.login(emailLogin, passwordLogin).subscribe({
      next: response => {
        this.router.navigate(['/starship-list']);
      },
      error: error => {
        console.log('user not log In', error)
        this.loginError = true;
      }
    });
  }



}
