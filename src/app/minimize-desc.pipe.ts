import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minimizeDesc'
})
export class MinimizeDescPipe implements PipeTransform {

  transform(productDisc:string, limit:number): string {
    return productDisc.split(' ').slice(0, limit).join(' ');
  }

}
