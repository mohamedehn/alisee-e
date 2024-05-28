import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HomeComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    console.log('HomeComponent');
  }

}
