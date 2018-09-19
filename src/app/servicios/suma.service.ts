import { Injectable } from '@angular/core';
import { delay } from 'q';

@Injectable()
export class SumaService {

 
  constructor() { }

  Adding(total: number){    
    let total2: number;
    return new Promise(resolve => {          
        for (let i=1; i < 10; i++ ){
          setTimeout(() => {
              total =7+total;     
              console.log(total);                  
          },i*1000);           
        }
        setTimeout(() => {
          resolve(total);
        }, 10000);
                
    });
  }

 
}


