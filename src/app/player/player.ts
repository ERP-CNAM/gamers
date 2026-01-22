import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GameService } from '../services/game.service';
import { Game } from '../models/game.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './player.html',
})
export class PlayerPage implements OnInit {
  private route = inject(ActivatedRoute);
  private gameService = inject(GameService);
  private sanitizer = inject(DomSanitizer);

  game?: Game;
  safeUrl?: SafeResourceUrl;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.game = this.gameService.getGameById(id);

    // On utilise $any() ou un cast dans le template, ou on étend l'interface Game
    const embedUrl = (this.game as any)?.embedUrl;
    if (this.game && embedUrl) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
  }
}
