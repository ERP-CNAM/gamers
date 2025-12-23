import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/AuthService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  imports: [FormsModule],
  templateUrl: './loginform.html',
  styleUrl: './loginform.css',
})
export class Loginform {
  private authService = inject(AuthService);
  private router = inject(Router);

  username = '';
  password = '';

  onSubmit() {
    const success = this.authService.login(this.username, this.password);
    console.log('Username :' + this.username);
    console.log('Password :' + this.password);
    console.log('success: ' + success);
    if (success) {
      this.router.navigate(['/']);
    }
  }
}
