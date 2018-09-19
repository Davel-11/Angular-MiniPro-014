import { Component, OnInit } from '@angular/core';
import { SumaService } from '../servicios/suma.service';

import * as products from "./mydata.json";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  procesos: any;

  procesoActual: String;
  procesoEstado: String;
  procesoInicio: number;
  procesoResultado: number;
  


  constructor(
    private sumaService: SumaService,     
    ) { }

  ngOnInit() {
    this.procesoActual= "Suma"
    this.procesoEstado= "Activo";  
    //this.getValueWithAsync2();  
    //JSON.parse(products);
    //console.log(products); 
    this.procesos = products;   
  } 

  async getValueWithAsync2() {
    this.procesoInicio = 7;
    const value = <number>await this.sumaService.Adding(this.procesoInicio);
    console.log(`async result: ${value}`);
    this.procesoResultado = value;
  }
}
