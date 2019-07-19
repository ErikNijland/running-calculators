import {Injectable} from '@angular/core';
import {Timetable} from '../../types/timetable';

@Injectable()
export class TimetableService {
  getRows(): Timetable {
    const minPaceInSecs = 210;
    const maxPaceInSecs = 600;
    const stepSizeInSecs = 1;
    const numberOfSteps = (maxPaceInSecs - minPaceInSecs) / stepSizeInSecs + 1;

    const paceEntries = Array.from({length: numberOfSteps}, (_, index: number) => {
      return minPaceInSecs + index * stepSizeInSecs;
    });

    return paceEntries.map((paceInSecs: number) => {
      const hourInSecs = 60 * 60;
      const speedInKmH = hourInSecs / paceInSecs;

      return [
        paceInSecs,
        speedInKmH,
        paceInSecs *  5000,
        paceInSecs * 10000,
        paceInSecs * 21100,
        paceInSecs * 42195
      ];
    });
  }
}
