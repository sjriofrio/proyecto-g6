import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import {  NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


interface Solicitante {
  id: number;
  Cedula: string;
  firstName: string;
  lastName: string;
  Birthday: Date; // Cambiado a Date
  MaritalStatus: string;
  Address: string;
  City: string;
  Province: string;
  Phone: string;
  Email: string;
  Attachment: string;
  status: 'Pendiente' | 'Aprobado' | 'Desaprobado'; // Nuevo campo para el estado
}
@Component({
  selector: 'app-solicitante',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink],
  templateUrl: './solicitante.component.html',
  styleUrl: './solicitante.component.css'
})
export class SolicitanteComponent implements OnInit {
  subject: string = '';
  message: string = '';

  solicitante: Solicitante [] = [
    {
      id: 1,
      Cedula: '12345678',
      firstName: 'Juan',
      lastName: 'Perez',
      Birthday: new Date(1980, 5, 15), // 15 de junio de 1980
      MaritalStatus: 'Soltero',
      Address: 'Barrio Central, Casa 10',
      City: 'Quito',
      Province: 'Pichinca',
      Phone: '123-456-7890',
      Email: 'juan.perez@example.com',
      Attachment: 'Documento.pdf',
      status: 'Pendiente'
    },
    {
      id: 2,
      Cedula: '87654321',
      firstName: 'Maria',
      lastName: 'Gomez',
      Birthday: new Date(1990, 10, 25), // 25 de noviembre de 1990
      MaritalStatus: 'Casada',
      Address: 'Barrio Norte, Casa 20',
      City: 'Quito',
      Province: 'Pichincha',
      Phone: '098-765-4321',
      Email: 'maria.gomez@example.com',
      Attachment: 'Plano.pdf',
      status: 'Pendiente'
    }
  ];

  newSolicitante: Solicitante = {
    id: 0,
    Cedula: '',
    firstName: '',
    lastName: '',
    Birthday: new Date(),
    MaritalStatus: '',
    Address: '',
    City: '',
    Province: '',
    Phone: '',
    Email: '',
    Attachment: '',
    status: 'Pendiente'
  };
  // Propiedades para el formulario de enviar correo
  solicitanteSeleccionado: Solicitante | null = null; // Para almacenar el solicitante seleccionado
  modalRef: NgbModalRef | null = null; // Referencia al modal

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Lógica de inicialización, si es necesaria
  }

  approveSolicitante(solicitante: Solicitante) {
    solicitante.status = 'Aprobado';
    // Fuerza la detección de cambios antes de redirigir
    setTimeout(() => {
      this.router.navigate(['/gmail']);
    }, 1000); // 1 segundo de retraso
  }
  disapproveSolicitante(solicitante: Solicitante) {
    solicitante.status = 'Desaprobado';
    setTimeout(() => {
      this.router.navigate(['/gmail/denegado-solicitud']);
    }, 1000); // Navega a la carpeta de Gmail denegado-solicitud después de 1 segundo
  }

  goBack() {
    this.router.navigate(['/nav']); // Navega a la página principal
  }
}
