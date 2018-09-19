import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardaDeDatosComponent } from './carda-de-datos/carda-de-datos.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';


import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardaDeDatosComponent,
    IntegrantesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      //{ path: '', component: AppComponent },
      { path: 'carga_de_datos', component: CardaDeDatosComponent },      
      { path: 'integrantes', component: IntegrantesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
