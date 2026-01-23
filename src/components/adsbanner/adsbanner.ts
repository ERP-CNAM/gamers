import { Component, OnInit, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ADS } from '../../app/data/ads';

@Component({
  selector: 'app-adsbanner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adsbanner.html',
})
export class Adsbanner implements OnInit, OnDestroy {
  private sanitizer = inject(DomSanitizer);

  isVisible = signal(true);

  currentAd = signal<{ link: string; html: SafeHtml } | null>(null);
  private intervalId: any;
  private currentIndex = Math.floor(Math.random() * ADS.length);

  ngOnInit() {
    this.updateAd();
    this.startRotation();
  }

  ngOnDestroy() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  updateAd() {
    const ad = ADS[this.currentIndex];
    this.currentAd.set({
      link: ad.link,
      // Bypass la sécurité Angular pour afficher le HTML de la pub
      html: this.sanitizer.bypassSecurityTrustHtml(ad.html),
    });
  }

  startRotation() {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % ADS.length;
      this.updateAd();
    }, 5000);
  }

  nextAd() {
    this.currentIndex = (this.currentIndex + 1) % ADS.length;
    this.updateAd();
    this.resetRotation();
  }

  prevAd() {
    this.currentIndex = (this.currentIndex - 1 + ADS.length) % ADS.length;
    this.updateAd();
    this.resetRotation();
  }

  resetRotation() {
    if (this.intervalId) clearInterval(this.intervalId);
    this.startRotation();
  }

  close() {
    this.isVisible.set(false);
  }
}
