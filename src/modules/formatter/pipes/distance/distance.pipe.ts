import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Pipe({
  name: 'rcDistance'
})
export class DistancePipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(distanceInMeters: number): string {
    const distanceInHectoMeters = Math.floor(distanceInMeters / 100);
    const distanceInKiloMeters = distanceInHectoMeters / 10; // With a maximum fraction of 1

    const decimalPipe = new DecimalPipe(this.locale);
    const formattedDistance = decimalPipe.transform(distanceInKiloMeters, '1.0-1');

    return `${formattedDistance} km`;
  }
}
