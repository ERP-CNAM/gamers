import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-loginform',
  imports: [FormsModule, RouterLink],
  templateUrl: './loginform.html',
  styleUrl: './loginform.css',
})
export class Loginform {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (isOk) => {
        if (isOk) {
          this.router.navigate(['/']);
        } else {
          alert('Identifiants incorrects');
        }
      },
      error: (err) => {
        console.error('Erreur lors de la connexion', err);
      },
    });
  }
}
