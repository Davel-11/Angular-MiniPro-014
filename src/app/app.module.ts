import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardaDeDatosComponent } from './carda-de-datos/carda-de-datos.component';
import { IntegrantesComponent } from './integrantes/integrantes.component';


import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//servicios
import { SumaService } from './servicios/suma.service';
import { HomeComponent } from './home/home.component';

//ngmodel
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardaDeDatosComponent,
    IntegrantesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([      
      { path: '', component: HomeComponent },      
      { path: 'carga_de_datos', component: CardaDeDatosComponent },      
      { path: 'integrantes', component: IntegrantesComponent },
    ])
  ],
  providers: [
    SumaService
  ],
  bootstrap: [AppComponent]
})


export class AppModule {
  
  

}
