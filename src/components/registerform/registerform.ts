import { Component, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registerform',
  imports: [FormsModule],
  templateUrl: './registerform.html',
  styleUrl: './registerform.css',
})
export class Registerform {
  @ViewChild('registerForm') registerForm!: NgForm;
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  confirmedpassword = '';
  firstName = '';
  lastName = '';
  phone = '';
  dateOfBirth = '';
  address = '';
  city = '';
  postalCode = '';
  country = 'FR';
  countries = [{ code: 'FR', name: 'France' }];

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    if (this.password !== this.confirmedpassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    this.authService
      .register(
        this.email,
        this.password,
        this.firstName,
        this.lastName,
        this.phone,
        this.address,
        this.city,
        this.postalCode,
        this.country,
        this.dateOfBirth,
      )
      .subscribe({
        next: (success) => {
          if (success) {
            console.log('Inscription et connexion réussies');
            this.router.navigate(['/']);
          } else {
            alert("Erreur lors de l'inscription. L'utilisateur existe peut-être déjà.");
          }
        },
        error: (err) => {
          console.error("Erreur réseau lors de l'inscription", err);
          alert('Une erreur est survenue, veuillez réessuyer plus tard.');
        },
      });
  }
}
