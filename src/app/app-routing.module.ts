import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EmpresaComponent } from './views/empresa/empresa.component';
import { AplicacionesDeLimpiezaComponent } from './views/aplicaciones-de-limpieza/aplicaciones-de-limpieza.component';
import { ServiciosDeLimpiezaComponent } from './views/servicios-de-limpieza/servicios-de-limpieza.component';
import { LogisticaIntegralComponent } from './views/logistica-integral/logistica-integral.component';
import { ServiciosPerifericosComponent } from './views/servicios-perifericos/servicios-perifericos.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { CookiesComponent } from './views/cookies/cookies.component';
import { AvisoLegalComponent } from './views/aviso-legal/aviso-legal.component';
import { CreditosComponent } from './views/creditos/creditos.component';
import { MapaDelSitioComponent } from './views/mapa-del-sitio/mapa-del-sitio.component';
import { DisolventesAiiiComponent } from './Views/servicios-de-limpieza/disolventes-aiii/disolventes-aiii.component';
import { BaseAcuosaCamaraComponent } from './Views/servicios-de-limpieza/base-acuosa-camara/base-acuosa-camara.component';
import { HibridaDisolvententesAiiiDetergentesComponent } from './Views/servicios-de-limpieza/hibrida-disolvententes-aiii-detergentes/hibrida-disolvententes-aiii-detergentes.component';
import { UltrasonidosComponent } from './Views/servicios-de-limpieza/ultrasonidos/ultrasonidos.component';


const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "empresa", component: EmpresaComponent },
  { path: "aplicaciones-de-limpieza", component: AplicacionesDeLimpiezaComponent },
  { path: "servicios-de-limpieza", component: ServiciosDeLimpiezaComponent },

  { path: "servicios-de-limpieza/disolventes-aiii", component: DisolventesAiiiComponent },
  { path: "servicios-de-limpieza/base-acuosa-camara", component: BaseAcuosaCamaraComponent },
  { path: "servicios-de-limpieza/hibrida-disolvententes-aiii-detergentes", component: HibridaDisolvententesAiiiDetergentesComponent },
  { path: "servicios-de-limpieza/ultrasonidos", component: UltrasonidosComponent },

  { path: "logistica-integral", component: LogisticaIntegralComponent },
  { path: "servicios-perifericos", component: ServiciosPerifericosComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "cookies", component: CookiesComponent },
  { path: "aviso-legal", component: AvisoLegalComponent },
  { path: "creditos", component: CreditosComponent },
  { path: "mapa-del-sitio", component: MapaDelSitioComponent },
  { path: "**", pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
