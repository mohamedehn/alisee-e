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
  public description: string =
    'Je suis psychanalyste à Lyon. Je vous propose des consultations en cabinet pour vous aider à surmonter vos problèmes psychologiques et à retrouver un équilibre psychique. Je suis à votre écoute pour vous aider à comprendre et à résoudre vos difficultés.';
  constructor() {}

  ngOnInit(): void {
    console.log('HomeComponent');
  }
}
