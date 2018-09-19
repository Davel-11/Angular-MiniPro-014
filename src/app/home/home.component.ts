import { Component, OnInit } from '@angular/core';
import { SumaService } from '../servicios/suma.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  procesos = [
    {id: 1, name: 'proceso-1', },
    {id: 2, name: 'proceso-2' },
    {id: 3, name: 'proceso-3' },
    {id: 4, name: 'proceso-4' }  
  ];

  procesoActual: String;
  procesoEstado: String;
  procesoInicio: number;
  procesoResultado: number;
 

  constructor(private sumaService: SumaService) { }

  ngOnInit() {
    this.procesoActual= "Suma"
    this.procesoEstado= "Activo";  
    this.getValueWithAsync2();      
  } 

  async getValueWithAsync2() {
    this.procesoInicio = 7;
    const value = <number>await this.sumaService.Adding(this.procesoInicio);
    console.log(`async result: ${value}`);
    this.procesoResultado = value;
  }
}
