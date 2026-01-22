// src/app/pages/detail/detail.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Game } from '../../models/game.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Adsbanner } from '../../../components/adsbanner/adsbanner';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, Adsbanner], // ✅ nécessaire pour *ngIf, pipes et routerLink
  templateUrl: './detail.html',
})
export class DetailPage implements OnInit {
  game?: Game;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.game = this.gameService.getGameById(id);
  }

  getYear(timestamp?: number): number | null {
    return timestamp ? new Date(timestamp * 1000).getFullYear() : null;
  }
}
