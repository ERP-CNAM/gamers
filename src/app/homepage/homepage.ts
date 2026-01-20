import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Hero } from '../../components/hero/hero';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-homepage',
  imports: [Hero],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
