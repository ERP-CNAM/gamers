import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
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
  private route = inject(ActivatedRoute);

  email = '';
  password = '';

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (isOk) => {
        if (isOk) {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
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
