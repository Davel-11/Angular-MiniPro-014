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
              this.procesoResultado = 0; 
              this.ngAfterViewInit(this.procesoId,this.procesoActual,this.procesoInicio,this.procesoResultado);
                            
              this.procesoResultado = <number>await this.Adding(this.procesoInicio);              
            }
            
            if(this.procesos[j].name === 'resta'){  
              this.procesoId = this.procesos[j].id;
              this.procesoActual = this.procesos[j].name;
              this.procesoInicio = this.procesos[j].valorInicio; 
              this.procesoResultado = 0; 
              this.ngAfterViewInit(this.procesoId,this.procesoActual,this.procesoInicio,this.procesoResultado);
                            
              this.procesoResultado = <number>await this.Removing(this.procesoInicio);      
            }

            if(this.procesos[j].name === 'divicion'){  
              this.procesoId = this.procesos[j].id;
              this.procesoActual = this.procesos[j].name;
              this.procesoInicio = this.procesos[j].valorInicio; 
              this.procesoResultado = 0; 
              this.ngAfterViewInit(this.procesoId,this.procesoActual,this.procesoInicio,this.procesoResultado);
                            
              this.procesoResultado = <number>await this.div(this.procesoInicio);      
            }

            if(this.procesos[j].name === 'multiplicacion'){  
              this.procesoId = this.procesos[j].id;
              this.procesoActual = this.procesos[j].name;
              this.procesoInicio = this.procesos[j].valorInicio; 
              this.procesoResultado = 0; 
              this.ngAfterViewInit(this.procesoId,this.procesoActual,this.procesoInicio,this.procesoResultado);
                            
              this.procesoResultado = <number>await this.times(this.procesoInicio);      
            }
      }
  }


     

  Adding(total){        
    return new Promise(resolve => {          
        for (let i=0; i < 5; i++ ){
          setTimeout(() => {
              total =total+7;     
              console.log(total); 
              this.ngAfterViewInit(this.procesoId,this.procesoActual,this.procesoInicio,total);                 
          },i*1000);           
        }
        setTimeout(() => {
          resolve(total);
        }, 5000);                
    });
  }
    
    
  Removing(total){        
    return new Promise(resolve => {          
        for (let i=0; i < 5; i++ ){
          setTimeout(() => {
              total =total-7;     
              console.log(total);  
              this.ngAfterViewInit(this.procesoId,this.procesoActual,this.procesoInicio,total);                  
          },i*1000);           
        }
        setTimeout(() => {
          resolve(total);
        }, 5000);                
    });
  }
   
  times(total){        
    return new Promise(resolve => {          
        for (let i=0; i < 5; i++ ){
          setTimeout(() => {
              total =total*7;     
              console.log(total);  
              this.ngAfterViewInit(this.procesoId,this.procesoActual,this.procesoInicio,total);                  
          },i*1000);           
        }
        setTimeout(() => {
          resolve(total);
        }, 5000);                
    });
  }

  div(total){        
    return new Promise(resolve => {          
        for (let i=0; i < 5; i++ ){
          setTimeout(() => {
              total =total/7;     
              console.log(total);  
              this.ngAfterViewInit(this.procesoId,this.procesoActual,this.procesoInicio,total);                  
          },i*1000);           
        }
        setTimeout(() => {
          resolve(total);
        }, 5000);                
    });
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
