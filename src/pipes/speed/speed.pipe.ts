import {Pipe, PipeTransform} from "@angular/core";
import {DecimalPipe} from "@angular/common";

@Pipe({
  name: 'speed'
})
export class SpeedPipe implements PipeTransform {
  constructor(private decimalPipe: DecimalPipe) {}
  transform(speedInKmH: number): string {
    const formattedSpeed = this.decimalPipe.transform(speedInKmH, '1.1-1');

    return `${formattedSpeed} km/h`;
  }
}
