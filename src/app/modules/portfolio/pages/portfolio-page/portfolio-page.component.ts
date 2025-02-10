import { Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HeaderComponent } from "../../components/header/header.component";


@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent {
  private document = inject(DOCUMENT);

  scrollToProjects() {
    this.document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}
