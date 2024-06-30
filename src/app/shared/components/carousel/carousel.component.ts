import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';

interface CarouselItem {
  image: string;
}

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() public items: CarouselItem[] = [];
  public currentIndex: number = 0;
  public interval: any;

  // To use compo in another one :
  // create in the component an CarouselItem array which will be filled with the data from the API
  // this carouselItems will take the same data as the interface CarouselItem
  // then push data from the API to the carouselItems array
  // then in the html of the component, add the carousel component and give it the carouselItems as input
  // <app-carousel [items]="carouselItems"></app-carousel>

  constructor(private cdRef:ChangeDetectorRef) {}
  ngOnInit(): void {
    this.startCarousel();
    this.cdRef.detectChanges();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    this.cdRef.detectChanges();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
      this.cdRef.detectChanges();
    }, 4000);
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  navigate(index: number) {
    this.currentIndex = index;
    this.cdRef.detectChanges();
  }

  getCurrentItem() {
    return this.items[this.currentIndex];
  }

}