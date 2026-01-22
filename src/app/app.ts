import { Component, signal } from '@angular/core';

import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { Adsbanner } from '../components/adsbanner/adsbanner';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet, Adsbanner],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gamerz');
}
