import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  authService = inject(AuthService);
  router = inject(Router);

  public formRegister: FormGroup;

  constructor(private fb: FormBuilder){
    this.formRegister = this.fb.group({
      'emailReg': ['', [Validators.required, Validators.email]],
      'passwordReg': ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onRegister(){

    if (this.formRegister.invalid){
      return this.formRegister.markAllAsTouched();
    }

    const {emailReg, passwordReg} = this.formRegister.value;

    this.authService.register(emailReg, passwordReg).subscribe({
      next: response => {
        this.router.navigate(['/starship-list']);
      },
      error: error => {
        console.log('User not registred', error)
      }
    });
  }


}


