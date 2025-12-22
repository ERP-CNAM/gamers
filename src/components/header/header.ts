import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMobileMenuOpen = false;
  isMobileProductExpanded = false;
  isUserMenuOpen = false;

  isConnected = true;
  isSubscribed = true;
  solde = 0;

  navLinks = [
    { label: 'Découvrir GamerZ', href: '/discover', showIfSubscribed: false },
    { label: "S'abonner", href: '/subscribe', showIfSubscribed: false },
    { label: 'Catalogue', href: '/catalogue', showIfSubscribed: true },
    { label: 'Marketplace', href: '/marketplace', showIfSubscribed: true },
    { label: 'Nous contacter', href: '/contact' }, // Toujours visible
  ];

  get filteredLinks() {
    return this.navLinks.filter((link) => {
      if (link.showIfSubscribed === true && !this.isSubscribed) return false;
      if (link.showIfSubscribed === false && this.isSubscribed) return false;

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

  logout() {
    this.isConnected = false;
    this.isSubscribed = false;
    this.isUserMenuOpen = false;
  }

  login() {
    this.isConnected = true;
  }

  toggleSubscribe() {
    this.isSubscribed = !this.isSubscribed;
  }
}
