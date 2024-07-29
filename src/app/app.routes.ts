import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { EscrituraComponent } from './escritura/escritura.component';
import { GmailComponent } from './gmail/gmail.component';
import { DenegadoSolicitudComponent } from './gmail/denegado-solicitud/denegado-solicitud.component';
import { DenegadoComprobanteComponent } from './gmail/denegado-comprobante/denegado-comprobante.component';
import { AprobadoComprobanteComponent } from './gmail/aprobado-comprobante/aprobado-comprobante.component';
import { EnvioEscrituraComponent } from './gmail/envio-escritura/envio-escritura.component';
import { PropertyCardComponent } from './property-card/property-card.component';
import { GestionTerrenosComponent } from './gestion-terrenos/gestion-terrenos.component';
import { UplaodComprobanteComponent } from './uplaod-comprobante/uplaod-comprobante.component';

//export const routes: Routes = [];
export interface RouteData {
  template?: string;
  // Puedes agregar más propiedades aquí si es necesario
}

export const routes: Routes = [
  // Ruta predeterminada

  { path: 'login', component: LoginComponent },
  { path: 'nav', component: NavComponent },
  { path: 'escritura', component: EscrituraComponent },
  { path: 'solicitante', component: SolicitanteComponent},
  { path: 'property-card', component: PropertyCardComponent},
  { path: 'gestion-terrenos', component: GestionTerrenosComponent},
  { path: 'uplaod-comprobante', component: UplaodComprobanteComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'gmail', component: GmailComponent, children: [
      { path: 'denegado-solicitud', component: DenegadoSolicitudComponent },
      { path: 'denegado-comprobante', component: DenegadoComprobanteComponent },
      { path: 'aprobado-comprobante', component: AprobadoComprobanteComponent },
      { path: 'envio-escritura', component: EnvioEscrituraComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
