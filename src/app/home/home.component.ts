import { Component, OnInit, AfterViewInit, ViewChild, Renderer2 } from '@angular/core';
import { SumaService } from '../servicios/suma.service';

import * as products from "./mydata.json";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 
  
  procesos: any = products;

  procesoActual: String;
  procesoId: String;
  procesoInicio: number;
  procesoResultado: number;
    
  datofinal: 10;

  constructor(
    private sumaService: SumaService, 
    private renderer: Renderer2    
    ) { }

  ngOnInit() {                  
  } 

  async Validaciones(){       
      for(let j=0; j < this.procesos.length ; j++ ){
            if(this.procesos[j].name === "suma"){              
              this.procesoId = this.procesos[j].id;
              this.procesoActual = this.procesos[j].name;
              this.procesoInicio = this.procesos[j].valorInicio; 
              this.ngAfterViewInit(this.procesoId,this.procesoActual,this.procesoInicio,this.procesoResultado);                                    
              this.procesoResultado = <number>await this.Adding(this.procesoInicio);                           
              this.ngAfterViewInit(this.procesoId,this.procesoActual,this.procesoInicio,this.procesoResultado);
            }

            

            if(this.procesos[j].name === 'resta'){
              this.procesoId = this.procesos[j].id;
              this.procesoActual = this.procesos[j].name;
              this.procesoInicio = this.procesos[j].valorInicio; 
              this.procesoResultado = this.removing(this.procesoInicio);
             
              this.ngAfterViewInit(this.procesoId,this.procesoActual,this.procesoInicio,this.procesoResultado);
            }
      }
  }


     

  Adding(total){        
    return new Promise(resolve => {          
        for (let i=1; i < 5; i++ ){
          setTimeout(() => {
              total =7+total;     
              console.log(total);                  
          },i*1000);           
        }
        setTimeout(() => {
          resolve(total);
        }, 5000);                
    });
  }
    
    
    removing(total){                 
      for (let i=1; i < 5; i++ ){        
        //setTimeout(() => {
            total = 7 - total;                          
        //},i*1000);       
      }
      return total;                   
    } 
 

    @ViewChild('proId') proId;
    @ViewChild('proActual') proActual;
    @ViewChild('proInicial') proInicial;
    @ViewChild('proFinal') proFinal;
    
      
    ngAfterViewInit(proId, proActual, proInicial, proFinal ){    
      this.proId.nativeElement.value = proId ;
      this.proActual.nativeElement.value = proActual;
      this.proInicial.nativeElement.value = proInicial ;
      this.proFinal.nativeElement.value = proFinal ;
    }
}
