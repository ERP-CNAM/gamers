import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-adsbanner',
  imports: [],
  templateUrl: './adsbanner.html',
  styleUrl: './adsbanner.css',
})
export class Adsbanner {
  @Input() linkUrl: string = '#';

  // Gestion de l'état d'affichage (fermé ou ouvert)
  isVisible = signal(true);

  close() {
    this.isVisible.set(false);
  }
}
