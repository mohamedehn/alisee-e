import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
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

  constructor() { }

  ngOnInit(): void {
    console.log('HomeComponent');
  }
}
