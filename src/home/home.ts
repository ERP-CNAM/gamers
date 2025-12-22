import { Component } from '@angular/core';
import { Header } from '../components/header/header';
import { Hero } from '../components/hero/hero';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Hero, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
