import { Injectable } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  private animatedElements: Set<Element> = new Set();

  constructor() {}

  observeAndAnimate(selector: string): void {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
          this.animate(entry.target);
          this.animatedElements.add(entry.target);
          observer.unobserve(entry.target);
        }
      });
    });
    elements.forEach((element) => {
      observer.observe(element);
    });
  }

  animate(element: Element): void {
    anime.timeline({ loop: false }).add({
      targets: element,
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 1400,
    });
  }
}
