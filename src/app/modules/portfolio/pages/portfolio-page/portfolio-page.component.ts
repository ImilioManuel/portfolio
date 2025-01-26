import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { PrimaryBtnComponent } from "../../components/primary-btn/primary-btn.component";
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-portfolio-page',
  imports: [
    HeaderComponent,
    PrimaryBtnComponent, 
    CardComponent,
  ],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss'
})
export class PortfolioPageComponent implements OnInit {
  
  btn_content_hero = 'Entrar em contacto';
  btn_content_about = 'Download Resume';
  
  heroSubtitle = '';
  fadeOut: boolean = false;
  
  heroMessages: string[] = [
    'Desenvolvedor Full-Stack',
    'Implentação de Soluções Open Source',
    'Analista de Sistemas Linux',
    'Devops'
  ];

  cards = [
    {
      card_img: '/modules/portfolio/services/svg/spring-boot.svg',
      card_title: 'Angular',
      card_description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      card_img: '/modules/portfolio/services/svg/react.svg',
      card_title: 'React',
      card_description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      card_img: '/modules/portfolio/services/svg/vue.svg',
      card_title: 'Vue.js',
      card_description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      card_img: '/modules/portfolio/services/svg/nodejs.svg',
      card_title: 'Node.js',
      card_description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];
  
  ngOnInit(): void {
    let index = 0;
    this.heroSubtitle = this.heroMessages[index];
    setInterval(() => {
      this.fadeOut = true;
      setTimeout(() => {
        index = (index + 1) % this.heroMessages.length; 
        this.heroSubtitle = this.heroMessages[index]; 
        this.fadeOut = false;
      }, 1000); 
    }, 4000); 
  }
  
}
