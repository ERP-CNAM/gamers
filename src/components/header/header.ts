import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
// import { AuthService } from '../../services/AuthService';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  authService = inject(AuthService);
  isMobileMenuOpen = false;
  isMobileProductExpanded = false;
  isUserMenuOpen = false;
  isHeaderVisible = true;
  lastScrollPosition = 0;

  navLinks = [
    // { label: 'Découvrir GamerZ', href: '/discover', showIfSubscribed: false },
    { label: 'Accueil', href: '/' },
    { label: 'Catalogue', href: '/catalogue' },
    { label: "S'abonner", href: '/subscribe', showIfSubscribed: false },
    { label: 'Nous contacter', href: '/contact-us' },
  ];

  get filteredLinks() {
    return this.navLinks.filter((link) => {
      if (link.showIfSubscribed === true && !this.authService.isSubscribed()) return false;
      if (link.showIfSubscribed === false && this.authService.isSubscribed()) return false;

      return true;
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  closeUserMenu() {
    this.isUserMenuOpen = false;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    // Si on est tout en haut de la page (ou presque), on affiche toujours le header
    if (currentScroll < 10) {
      this.isHeaderVisible = true;
    }
    // Si on descend (scroll actuel > ancien scroll), on cache le header
    else if (currentScroll > this.lastScrollPosition) {
      this.isHeaderVisible = false;
    }
    // Si on remonte, on réaffiche le header
    else {
      this.isHeaderVisible = true;
    }

    this.lastScrollPosition = currentScroll;
  }
}
