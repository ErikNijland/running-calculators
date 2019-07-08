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

    return Math.ceil(timeInSeconds / distanceInMeters * 1000);
  }

  getTableData() {
    const minPaceInSecs = 270;
    const maxPaceInSecs = 510;
    const stepSizeInSecs = 5;
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
    return distanceFormValue.kilometers * 1000 + distanceFormValue.meters;
  }

  private getTimeInSeconds(timeFormValue: TimeFormValue) {
    return timeFormValue.hours * 60 * 60 + timeFormValue.minutes * 60 + timeFormValue.seconds;
  }
}
