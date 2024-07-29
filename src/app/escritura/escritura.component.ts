import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


interface Escritura {
  id: number;
  Cedula: string;
  firstName: string;
  lastName: string;
  City: string;
  Email: string;
  Document: string;
  status: 'Pendiente' | 'Aprobado' ; // Nuevo campo para el estado
}

@Component({
  selector: 'app-escritura',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule,  RouterLink ],
  templateUrl: './escritura.component.html',
  styleUrl: './escritura.component.css'
})
export class EscrituraComponent implements OnInit{

  subject: string = '';
  message: string = '';

  escritura: Escritura [] = [
    {
      id: 1,
      Cedula: '12345678',
      firstName: 'Juan',
      lastName: 'Perez',
      City: 'Quito',
      Email: 'juan.perez@example.com',
      Document: 'comprobante.jpg',
      status: 'Pendiente'
    },
    {
      id: 2,
      Cedula: '87654321',
      firstName: 'Maria',
      lastName: 'Gomez',
      City: 'Quito',
      Email: 'maria.gomez@example.com',
      Document: 'Plano.jpg',
      status: 'Pendiente'
    }
  ];

  newEscritura: Escritura = {
    id: 0,
    Cedula: '',
    firstName: '',
    lastName: '',
    City: '',
    Email: '',
    Document: '',
    status: 'Pendiente'
  };
  // Propiedades para el formulario de enviar correo
  escrituraSeleccionado: Escritura | null = null; // Para almacenar la escritura seleccionada

  ngOnInit(): void {
    // Lógica de inicialización, si es necesaria
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  approveEscritura(escritura: Escritura) {
    escritura.status = 'Aprobado';
    setTimeout(() => {
      this.router.navigate(['envio-escritura'], { relativeTo: this.activatedRoute });
    }, 1000);
  }
  verDocumentoAdjunto() {
    // Aquí defines la URL del documento adjunto
    const url = 'ruta/al/documento-adjunto.pdf';
    // Abre una nueva ventana con el documento adjunto
    window.open(url, '_blank');
  }

  goBack() {
    this.router.navigate(['/nav']); // Navega a la página principal
  }
}
