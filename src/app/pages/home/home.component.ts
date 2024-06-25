import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MapComponent } from '../../shared/components/map/map.component';
import { AnimationService } from '../../animation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit{
  public name: string = 'Alisée Eggermont';
  public introduction: string = 'Psychanalyste à Lyon';
  public description: string = "";
  public homeImg: string = 'assets/homes.png';
  public officeImg: string = 'assets/office.jpg';
  public psyTitle: string = 'Thérapie';
  public therapyst: string = 'Votre thérapeute';
  public info: string = 'Informations pratiques';
  public rdv: string = 'Prendre rendez-vous';
  public infos: any = {
    email: 'contact@alisee-eggermont-psy.fr',
    telephone: '06 82 37 02 51',
    adresse: '105 rue Duguesclin, 69006 Lyon',
    accederAuCabinet: {
      metro: 'Métro A - Foch',
      bus: [
        'BUS 27 - Foch',
        'BUS 38 - Mairie du 6ème',
        'BUS C4 - Edgar Quinet'
      ]
    },
    tarifs: {
      psychotherapieDeSoutien: '60 euros',
      psychanalyse: '60 euros',
      note: 'Afin de continuer à rendre la psychanalyse accessible au plus grand nombre, il est possible d’adapter le prix des séances en fonction de votre situation.'
    },
    dureeDeLaSeance: '50 minutes',
    modeDeReglement: [
      'Chèque,',
      'Espèces'
    ]
  };

  constructor(private animationService: AnimationService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log('HomeComponent');
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
