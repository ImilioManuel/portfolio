import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private document = inject(DOCUMENT);
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollTo(elementId: string) {
    this.document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    this.isMenuOpen = false;
  }
}
