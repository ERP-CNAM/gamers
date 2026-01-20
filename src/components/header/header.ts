import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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

  navLinks = [
    // { label: 'Découvrir GamerZ', href: '/discover', showIfSubscribed: false },
    { label: "S'abonner", href: '/subscribe', showIfSubscribed: true },
    { label: 'Catalogue', href: '/catalogue', showIfSubscribed: true },
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
}
