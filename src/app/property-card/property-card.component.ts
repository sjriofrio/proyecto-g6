import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {
    property = {
      price:  'USD 3.600.000',
      location: 'Santo Domingo vía La Concordia km 8 km 8',
      address: 'Norte de Santo Domingo, Santo Domingo',
      area: '2147483647 m² tot.',
      description: '¡Atención empresarios e inversores! Se vende terreno industrial en una ubicación privilegiada de la ciudad Santo Domingo...',
      features: ['Super destacado']
    };

    property1 ={
      price: 'USD 2.500.000',
      location: 'Santo Domingo vía La Concordia km 10',
      address: 'Norte de Santo Domingo, Santo Domingo',
      area: '1500 m² tot.',
      description: 'Terreno residencial en una excelente ubicación con hermosas vistas.',
      features: ['Destacado']
    };

    property2 ={
      price: 'USD 1.200.000',
      location: 'Santo Domingo vía La Concordia km 12',
      address: 'Norte de Santo Domingo, Santo Domingo',
      area: '800 m² tot.',
      description: 'Terreno comercial en una zona de alto tráfico, ideal para negocios.',
      features: ['Destacado']
    };

    property3 ={
      price: 'USD 800.000',
      location: 'Santo Domingo vía La Concordia km 15',
      address: 'Norte de Santo Domingo, Santo Domingo',
      area: '500 m² tot.',
      description: 'Terreno residencial en una zona tranquila y segura.',
      features: ['Destacado']
    };




    onContactClick() {
      // Handle contact click event

    }

    onWhatsAppClick() {
      // Handle WhatsApp click event
    }

    onFavoriteClick() {
      // Handle favorite click event
    }
    constructor(private router: Router) {}
    goBack() {
      this.router.navigate(['/nav']); // Navega a la página principal
    }
}
