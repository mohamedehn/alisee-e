import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  public image: string = '';
  public headerName: string = 'Alisée Eggermont';
  public menuOpen: boolean = false;

  constructor() {}

  public navElements = [
    { name: 'Accueil', link: '#home' },
    { name: 'Thérapie', link: '#therapy' },
    { name: 'Votre thérapeute', link: '#psy' },
    { name: 'Info pratiques', link: '#infos' },
    { name: 'Prendre rendez-vous', link: '#contact' },
  ];

  public toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}