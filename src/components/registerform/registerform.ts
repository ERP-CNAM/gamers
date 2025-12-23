import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/AuthService';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  imports: [FormsModule],
  templateUrl: './registerform.html',
  styleUrl: './registerform.css',
})
export class Registerform {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  username = '';
  password = '';
  confirmedpassword = '';

  onSubmit() {
    const success = this.authService.register(this.username, this.password);
    if (success) {
      this.router.navigate(['/']);
    }
  }
}
