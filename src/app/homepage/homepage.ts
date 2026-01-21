import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { DiscoverPage } from '../discover/discover';
import { Contactuspage } from '../contactuspage/contactuspage';

@Component({
  selector: 'app-homepage',
  imports: [Hero, DiscoverPage, Contactuspage],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
