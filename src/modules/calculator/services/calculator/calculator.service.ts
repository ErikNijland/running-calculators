import {Injectable} from '@angular/core';
import {union} from 'lodash';
import {PaceCalculatorValue} from '../../types/pace-calculator-value';
import {DistanceFormValue} from '../../types/distance-form-value';
import {TimeFormValue} from '../../types/time-form-value';

@Injectable()
export class CalculatorService {
  calculatePace(paceFormValue: PaceCalculatorValue) {
    const distanceInMeters = this.getDistanceInMeters(paceFormValue.distance);
    const timeInSeconds = this.getTimeInSeconds(paceFormValue.time);

    return Math.floor(timeInSeconds / distanceInMeters * 1000);
  }

  calculateDistance(distanceFormValue: DistanceFormValue) {
    return 12345;
  }

  getTableData() {
    const minPaceInSecs = 210;
    const maxPaceInSecs = 600;
    const stepSizeInSecs = 1;
    const numberOfSteps = (maxPaceInSecs - minPaceInSecs) / stepSizeInSecs + 1;

    const generatedPaceEntries = Array.from({length: numberOfSteps}, (_, index: number) => {
      return minPaceInSecs + index * stepSizeInSecs;
    });
    const customPaceEntries = [ 319, 341, 360 ];
    const allPaceEntries = union(generatedPaceEntries, customPaceEntries).sort();

    return allPaceEntries.map((paceInSecs: number) => {
      const hourInSecs = 60 * 60;
      const speedInKmH = hourInSecs / paceInSecs;

      return [
        customPaceEntries.includes(paceInSecs),
        paceInSecs,
        speedInKmH,
        paceInSecs *  1000,
        paceInSecs *  5000,
        paceInSecs * 10000,
        paceInSecs * 21100,
        paceInSecs * 42195
      ];
    });
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
}
