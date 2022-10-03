import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoDe'
})
export class TipoDePipe implements PipeTransform {

  transform(value: string, arg:any): any {
    let cualEs:any;
    if(arg==="tipo"){
      switch (typeof value) {
        case "string":
          cualEs="Texto"
          break;
          case "number":
          cualEs="Número"
          break;
          case "object":
          cualEs="Objeto"
          break;
          case null:
            cualEs=0
          break;
        default:
          cualEs= typeof value;
          break;
      }
      return cualEs;
    }
    if(arg==="large"){
      let cantidad:number;
      if(value==="undefine" || value===null) return cantidad=0;
      cantidad=value.toString().length;
      return cantidad;
    }
  }

}
