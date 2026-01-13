import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/AuthService';
import { Router, RouterLink } from '@angular/router';

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
    const success = this.authService.login(this.email, this.password);
    if (success) {
      this.router.navigate(['/']);
    }
  }
}
