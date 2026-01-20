import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Game } from '../models/game.model';
import { GAMES } from '../data/games';

@Component({
  selector: 'app-cataloguepage',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cataloguepage.html',
  styleUrls: ['./cataloguepage.css'],
})
export class Cataloguepage {
  games: Game[] = GAMES;

  trackById(_index: number, game: Game): number {
    return game.id;
  }

  coverUrl(game: Game): string {
    return game.cover?.url ?? 'https://via.placeholder.com/264x352?text=No+Cover';
  }
}
