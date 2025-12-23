import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  imports: [FormsModule],
  templateUrl: './loginform.html',
  styleUrl: './loginform.css',
})
export class Loginform {
  username = '';
  password = '';

  onSubmit() {
    console.log('Username :' + this.username);
    console.log('Password :' + this.password);
  }
}
