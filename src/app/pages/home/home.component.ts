import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MapComponent } from '../../shared/components/map/map.component';
import { AnimationService } from '../../animation.service';
import { ExternalScriptComponent } from '../../shared/components/external-script/external-script.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MapComponent, ExternalScriptComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, AfterViewInit{
  public name: string = 'Nom et Prénom';
  public introduction: string = 'Psychanalyste à Lyon';
  public description: string = "";
  public homeImg: string = 'assets/homes.png';
  public aliseeImg: string = 'assets/alisee.png';
  public psyTitle: string = 'Thérapie';
  public therapyst: string = 'Votre thérapeute';
  public info: string = 'Informations pratiques';
  public rdv: string = 'Prendre rendez-vous';
  public infos: any = {
    email: 'contact@alisee-eggermont-psy.fr',
    phone: '06 82 37 02 51',
    address: '105 rue Duguesclin, 69006 Lyon',
    office: {
      metro: 'Métro A - Foch',
      bus1: 'BUS 27 - Foch',
      bus2: 'BUS 38 - Mairie du 6ème',
      bus3: 'BUS C4 - Edgar Quinet'
    },
    tarifs: {
      psychotherapieDeSoutien: 'Psychothérapie de soutien ou analytique : 60 euros',
      psychanalyse: 'Psychanalyse : 60 euros',
      note: "Afin de continuer à rendre la psychanalyse accessible il est possible,  dans certains cas,  d’adapter le prix des séances."
    },
    dureeDeLaSeance: '50 minutes environ',
    modeDeReglement: [
      'Chèque ', ' Espèces'
    ]
  };

  public therapystInfos: any = {
    intro1: "Qui suis-je ?",
    text1: "Je suis psychanalyste, formée au sein de la Fédération Freudienne de Psychanalyse (FFDP)  pendant cinq ans. Cet apprentissage, à la fois théorique et pratique, a été complété par une psychanalyse personnelle et didactique de plusieurs années. Mon activité est supervisée par un psychanalyste de la FFDP, garantissant ainsi le respect du code déontologique.",
    text2: "J'accueille adultes et adolescents dans mon cabinet situé à Lyon 6ème, pour les accompagner dans un parcours psychanalytique, une psychothérapie de soutien ou une psychothérapie analytique.",
    intro2: "Mon approche thérapeutique",
    text3: "Ensemble, nous explorerons votre psychisme pour dénouer les fils qui influencent vos pensées, vos émotions et vos comportements actuels. L'objectif est de vous permettre d'accéder à un mieux-être durable, en favorisant votre épanouissement personnel.",
    text4: "Au cœur de la thérapie, une relation de confiance se tisse entre le patient et le psychanalyste. C'est dans ce climat que vous pourrez explorer votre psyché en profondeur, sans crainte ni retenue. Je suis là pour vous accompagner à chaque étape de ce cheminement, en vous offrant un espace d'écoute attentive et bienveillante. Mon engagement est de vous guider avec respect, en veillant à ce que vous vous sentiez toujours à l'aise."
  }

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
