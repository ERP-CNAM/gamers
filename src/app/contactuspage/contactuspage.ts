import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Adsbanner } from '../../components/adsbanner/adsbanner';

@Component({
  selector: 'app-contactuspage',
  imports: [CommonModule, FormsModule, Adsbanner],
  templateUrl: './contactuspage.html',
  styleUrl: './contactuspage.css',
})
export class Contactuspage {
  contact = {
    name: '',
    email: '',
    message: '',
  };

  submitted = false;

  submitForm() {
    console.log('Message envoyé (fake) :', this.contact);
    this.submitted = true;

    // reset fake form
    this.contact = {
      name: '',
      email: '',
      message: '',
    };
  }
}
