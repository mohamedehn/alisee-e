import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  public image = '';
  constructor() {}
  public navElements = [
    { name: 'Accueil', link: '/home' },
    { name: 'Thérapies', link: '/therapy' },
    { name: 'Tarifs', link: '/tariff' },
    { name: 'Contact', link: '/contact' },
    { name: 'Votre Psychanalyste', link: '/login' },
  ];
}
