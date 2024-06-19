import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MapComponent } from '../../shared/components/map/map.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public name: string = 'Alisée Eggermont';
  public introduction: string = 'Psychanalyste à Lyon';
  public description: string = "";
  public homeImg: string = 'assets/homes.png';
  public officeImg: string = 'assets/office.jpg';
  public psyTitle: string = 'Thérapie';
  public therapyst: string = 'Votre thérapeute';
  public info: string = 'Informations pratiques';
  public rdv: string = 'Prendre rendez-vous';
  public infos: any = [
    {
      name: 'Adresse',
      element : '105 Rue Duguesclin, 69006 Lyon',
    },
    {
      name: 'Téléphone',
      element : '06 06 06 06 06',
    },
    {
      name: 'Email',
      element: 'contact@contact.fr',
    },
    {
      name: 'Horaires',
      element: 'Du lundi au vendredi de 9h à 19h',
    },
    {
      name: 'Prix',
      element: 'Prix de la consultation : 50€',
    },
    {
      name: 'Paiement',
      element: 'Paiement par chèque ou espèces',
    },
  ]

  constructor() { }

  ngOnInit(): void {
    console.log('HomeComponent');
  }
}
