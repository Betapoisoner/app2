import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  debug = true;
  log(obj: any) {
    if (this.debug) {
      switch (typeof obj) {
        case 'string':
          console.log('El objeto es una cadena:', obj);
          // Procesar el objeto como una cadena
          break;
        case 'number':
          console.log('El objeto es un número:', obj);
          // Procesar el objeto como un número
          break;
        case 'boolean':
          console.log('El objeto es un booleano:', obj);
          // Procesar el objeto como un booleano
          break;
        case 'object':
          if (Array.isArray(obj)) {
            console.log('El objeto es un array:', obj);
            // Procesar el objeto como un array
          } else if (obj !== null) {
            console.log('El objeto es un objeto:', obj);
            // Procesar el objeto como un objeto
          } else {
            console.log('El objeto es null');
          }
          break;
        case 'function':
          console.log('El objeto es una función:', obj);
          // Procesar el objeto como una función
          break;
        default:
          console.log('Tipo de objeto no soportado:', typeof obj);
      }
    }
  }
}
