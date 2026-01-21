import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { DiscoverPage } from '../discover/discover';

@Component({
  selector: 'app-homepage',
  imports: [Hero, DiscoverPage],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
