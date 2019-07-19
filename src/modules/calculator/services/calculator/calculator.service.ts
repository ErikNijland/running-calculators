import {Injectable} from '@angular/core';
import {PaceCalculatorValue} from '../../types/pace-calculator-value';
import {DistanceFormValue} from '../../types/distance-form-value';
import {TimeFormValue} from '../../types/time-form-value';
import {DistanceCalculatorValue} from '../../types/distance-calculator-value';
import {PaceFormValue} from '../../types/pace-form-value';
import {TimeCalculatorValue} from '../../types/time-calculator-value';

@Injectable()
export class CalculatorService {
  calculatePace(paceFormValue: PaceCalculatorValue): number {
    const distanceInMeters = this.getDistanceInMeters(paceFormValue.distance);
    const timeInSeconds = this.getTimeInSeconds(paceFormValue.time);

    return Math.floor(timeInSeconds / distanceInMeters * 1000);
  }

  calculateTime(timeFormValue: TimeCalculatorValue): number {
    const paceInSeconds = this.getPaceInSeconds(timeFormValue.pace);
    const distanceInMeters = this.getDistanceInMeters(timeFormValue.distance);

    return paceInSeconds * distanceInMeters;
  }

  calculateDistance(distanceFormValue: DistanceCalculatorValue): number {
    const paceInSeconds = this.getPaceInSeconds(distanceFormValue.pace);
    const timeInSeconds = this.getTimeInSeconds(distanceFormValue.time);

    return Math.floor(timeInSeconds / paceInSeconds * 1000);
  }

  private getDistanceInMeters(distanceFormValue: DistanceFormValue) {
    const kilometers = distanceFormValue.kilometers || 0;
    const meters = distanceFormValue.meters || 0;

    return kilometers * 1000 + meters;
  }

  private getTimeInSeconds(timeFormValue: TimeFormValue) {
    const hours = timeFormValue.hours || 0;
    const minutes = timeFormValue.minutes || 0;
    const seconds = timeFormValue.seconds || 0;

    return hours * 60 * 60 + minutes * 60 + seconds;
  }

  private getPaceInSeconds(paceFormValue: PaceFormValue) {
    const minutes = paceFormValue.minutes || 0;
    const seconds = paceFormValue.seconds || 0;

    return minutes * 60 + seconds;
  }
}
