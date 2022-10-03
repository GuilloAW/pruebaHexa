import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letraAB'
})
export class LetraABPipe implements PipeTransform {

  transform(value: string): any {
    let letra:string=value.charAt(0).toLowerCase();
    return letra==="a" || letra==="b" ? "dis-b":"dis-n";

  }

}
