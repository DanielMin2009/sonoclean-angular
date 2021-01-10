import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services 
import { MessageService } from "./services/message.service";

// Components
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ContactFormComponent } from './components/shared/contact-form/contact-form.component';
import { HomeComponent } from './views/home/home.component';
import { EmpresaComponent } from './views/empresa/empresa.component';
import { AplicacionesDeLimpiezaComponent } from './views/aplicaciones-de-limpieza/aplicaciones-de-limpieza.component';
import { ServiciosDeLimpiezaComponent } from './views/servicios-de-limpieza/servicios-de-limpieza.component';

import { DisolventesAiiiComponent } from './Views/servicios-de-limpieza/disolventes-aiii/disolventes-aiii.component';
import { BaseAcuosaCamaraComponent } from './Views/servicios-de-limpieza/base-acuosa-camara/base-acuosa-camara.component';
import { HibridaDisolvententesAiiiDetergentesComponent } from './Views/servicios-de-limpieza/hibrida-disolvententes-aiii-detergentes/hibrida-disolvententes-aiii-detergentes.component';
import { UltrasonidosComponent } from './Views/servicios-de-limpieza/ultrasonidos/ultrasonidos.component';

import { LogisticaIntegralComponent } from './views/logistica-integral/logistica-integral.component';
import { ServiciosPerifericosComponent } from './views/servicios-perifericos/servicios-perifericos.component';
import { ContactoComponent } from './views/contacto/contacto.component';
import { CookiesComponent } from './views/cookies/cookies.component';
import { AvisoLegalComponent } from './views/aviso-legal/aviso-legal.component';
import { CreditosComponent } from './views/creditos/creditos.component';
import { MapaDelSitioComponent } from './views/mapa-del-sitio/mapa-del-sitio.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CallToActionComponent } from './components/shared/call-to-action/call-to-action.component';
import { ClientsComponent } from './components/shared/clients/clients.component';
import { CorporativeBarComponent } from './components/shared/corporative-bar/corporative-bar.component';
import { ServicesLinksComponent } from './components/shared/services-links/services-links.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EmpresaComponent,
    AplicacionesDeLimpiezaComponent,
    ServiciosDeLimpiezaComponent,
    LogisticaIntegralComponent,
    ServiciosPerifericosComponent,
    ContactoComponent,
    CookiesComponent,
    AvisoLegalComponent,
    CreditosComponent,
    MapaDelSitioComponent,
    DisolventesAiiiComponent,
    BaseAcuosaCamaraComponent,
    HibridaDisolvententesAiiiDetergentesComponent,
    UltrasonidosComponent,
    FooterComponent,
    CallToActionComponent,
    ClientsComponent,
    CorporativeBarComponent,
    ServicesLinksComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
