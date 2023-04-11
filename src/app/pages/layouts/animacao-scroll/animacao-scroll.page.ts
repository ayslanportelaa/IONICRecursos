import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animacao-scroll',
  templateUrl: './animacao-scroll.page.html',
  styleUrls: ['./animacao-scroll.page.scss'],
})
export class AnimacaoScrollPage implements OnInit {



  constructor() { }

  ngOnInit() {

    this.animateOnScroll();

  }


  animateOnScroll() {
    const sections = document.querySelectorAll('.animated-section');
  
    function checkSections() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowBottom = window.innerHeight - 100;
        if (sectionTop < windowBottom) {
          section.classList.add('animate');
        }
      });
    }
  
    checkSections();
  
    window.addEventListener('scroll', checkSections);
  }
  
  //document.addEventListener('DOMContentLoaded', animateOnScroll);






}
