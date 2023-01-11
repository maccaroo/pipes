import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    if (!value)
      return "";

    switch (targetUnits) {
      case 'km':
        return parseFloat(value) * 1.609;
      case 'm':
        return parseFloat(value) * 1.609 * 1000;
      case 'cm':
        return parseFloat(value) * 1.609 * 1000 * 100;
      default:
        return new Error("Target unit not supported");
    }
  }

}
