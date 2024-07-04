import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { AnimationService } from '../../animation.service';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { WidgetComponent } from '../../shared/components/widget/widget.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CarouselComponent, WidgetComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements AfterViewInit {
  public name: string = 'Alisée Eggermont';
  public introduction: string = 'Psychanalyste à Lyon';
  public description: string = '';
  public homeImg: string = 'assets/homes.png';
  public homeImg2: string = 'assets/homes2.png';
  public officeImg: string = 'assets/office.jpg';
  public aliseeImg: string = 'assets/alisee.webp';
  public therapy: any = {
    title: 'Thérapie',
    intro:
      'Aller à la rencontre d’un psy, qu’il s’agisse d’un psychanalyste, d’un psychologue ou d’un psychothérapeute, n’est pas une démarche facile pour tout le monde. Le but est que vous soyez accompagné(e) pour traiter vos maux par vos mots. Le choix du type de thérapie se fait naturellement, en fonction de vos besoins et envies. Le rôle de tout thérapeute est le mieux-être du patient, mais le chemin pour y arriver diffère en fonction du type de thérapie.',
    categories: [
      {
        id: 1,
        title: 'Psychothérapie de soutien',
        text: 'La psychothérapie de soutien intervient lorsque vous avez besoin d’un soutien ponctuel pour avancer. Elle se concentre sur le présent en vous offrant un espace d’écoute, idéal pour les thérapies de plus courte durée. Permettant de mieux vous comprendre, elle vous apporte les ressources nécessaires pour avancer lorsque vous vous sentez dépassé(e) par les difficultés de la vie.',
      },
      {
        id: 2,
        title: 'Psychothérapie analytique',
        text: 'La psychothérapie analytique vous permet d’explorer les profondeurs de l’inconscient pour comprendre les racines de vos comportements et de vos émotions. Elle intègre des principes psychanalytiques mais elle est plus accessible, moins intensive. La différence majeure se trouve dans le fait que l’échange se déroule en face à face et non sur le divan.',
      },
      {
        id: 3,
        title: 'Psychanalyse',
        text: "La psychanalyse est une approche plus approfondie, un véritable voyage à l’intérieur de soi. Elle permet d’explorer les sources inconscientes de votre souffrance, vos pensées et vos émotions, pour vous en libérer durablement. Autrement dit, elle ne se contente pas de soulager vos symptômes, mais s'attaque à leurs racines. Bien que la temporalité soit un outil nécessaire à une psychanalyse fonctionnelle, cela ne signifie pas nécessairement une thérapie de longue durée. En psychanalyse, le patient est au centre du processus de guérison. Le psychanalyste l'accompagne dans ce voyage intérieur, en créant un cadre favorable à l'exploration de soi, comme la position allongée qui facilite la libre association.",
      },
    ],
    conclusion:
      'Au cours des premières séances, nous échangerons sur vous, vos besoins, vos craintes, vos souffrances. Ensuite, nous pourrons déterminer ensemble l’accompagnement le plus favorable à votre situation. Il est important de savoir qu’en séance, vous pouvez tout dire sans peur d’être jugé(e), sans tabou. C’est au cœur d’une relation de confiance qu’une thérapie peut fonctionner.',
  };
  public therapyst: string = 'Votre thérapeute';
  public info: string = 'Informations pratiques';
  public infos: any = {
    email: 'contact@alisee-eggermont-psy.fr',
    phone: '06 82 37 02 51',
    address: 'Espace Paramédical et de Psychothérapie',
    address2: '105 rue Duguesclin, 69006 Lyon',
    office: {
      metro: 'Métro A - Foch',
      bus1: 'BUS 27 - Foch',
      bus2: 'BUS 38 - Mairie du 6ème',
      bus3: 'BUS C4 - Edgar Quinet',
    },
    tarifs: {
      psychotherapieDeSoutien:
        'Psychothérapie de soutien ou analytique : 60 euros',
      psychanalyse: 'Psychanalyse : 60 euros',
      note: 'Afin de continuer à rendre la psychanalyse accessible il est possible,  dans certains cas,  d’adapter le prix des séances.',
    },
    dureeDeLaSeance: '50 minutes environ',
    modeDeReglement: ['Chèque ', ' Espèces'],
  };

  public therapystInfos: any = {
    intro1: 'Qui suis-je ?',
    text2:
      "Mon activité est supervisée par un psychanalyste de la FFDP, garantissant ainsi le respect du code déontologique. J'accueille adultes et adolescents dans mon cabinet situé à Lyon 6ème, pour les accompagner dans un parcours psychanalytique, une psychothérapie de soutien ou une psychothérapie analytique.",
    intro2: 'Mon approche thérapeutique',
    text3:
      "C'est dans un climat de confiance que vous pourrez explorer votre psyché en profondeur, sans crainte ni retenue. Je suis là pour vous accompagner à chaque étape de ce cheminement, en vous offrant un espace d'écoute attentive et bienveillante. Mon engagement est de vous guider avec respect, en veillant à ce que vous vous sentiez toujours à l'aise.",
    text4:
      "Ensemble, nous explorerons votre psychisme pour dénouer les fils qui influencent vos pensées, vos émotions et vos comportements actuels. L'objectif est de vous permettre d'accéder à un mieux-être durable, en favorisant votre épanouissement personnel.",
  };
  public openedCategoryIndex: number | null = null;
  public isOpen: boolean = false;
  public carouselItems: any[] = [];

  constructor(
    private animationService: AnimationService,
    private cdRef: ChangeDetectorRef
  ) {
    this.getImages();
  }

  getImages() {
    this.carouselItems.push(
      {
        image: 'assets/office1.webp',
      },
      {
        image: 'assets/office2.webp',
      },
      {
        image: 'assets/office3.webp',
      }
    );
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

  toggleDropDown(index: number) {
    if (this.openedCategoryIndex === index) {
      this.openedCategoryIndex = null;
    } else {
      this.openedCategoryIndex = index;
    }
    this.cdRef.detectChanges();
  }
}
