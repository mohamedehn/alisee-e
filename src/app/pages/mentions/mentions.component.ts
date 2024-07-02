import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
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
export class MentionsComponent {
  constructor(
    private animationService: AnimationService,
    private cdRef: ChangeDetectorRef
  ) {}

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
