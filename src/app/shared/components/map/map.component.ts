import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    // Initialiser la carte avec les coordonnées de l'adresse
    const map = L.map('map').setView([45.7679278, 4.8475797], 45.7679278);

    // Ajouter une couche de tuiles OpenStreetMap à la carte
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ''
    }).addTo(map);

    // Ajouter un marqueur sur l'adresse
    L.marker([45.7679278, 4.8475797]).addTo(map)
      .bindPopup('Lyon, France')
      .openPopup();
  }
}
