import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { AnimationService } from '../../animation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mentions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mentions.component.html',
  styleUrl: './mentions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MentionsComponent implements AfterViewInit, OnInit{
  constructor(
    private animationService: AnimationService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  ngAfterViewInit(): void {
    this.animationService.observeAndAnimate('.an-1');
    const imageElement = document.querySelectorAll('.fade-in');
    imageElement?.forEach((element) => {
      element.addEventListener('load', () => {
        element.classList.add('loaded');
      });
    });
    this.cdRef.detectChanges();
  }
}
