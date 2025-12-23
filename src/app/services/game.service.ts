// src/app/services/game.service.ts
import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { GAMES } from '../data/games';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  getGameById(id: number): Game | undefined {
    if (!environment.useIGDBApi) {
      return GAMES.find(g => g.id === id);
    }

    // Ici tu pourras appeler l'API IGDB plus tard
    return undefined;
  }

  getGames(): Game[] {
    return GAMES;
  }
}
