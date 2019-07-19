import {Routes} from '@angular/router';
import {PaceCalculatorComponent} from '../calculator/components/calculators/pace-calculator/pace-calculator';
import {DistanceCalculatorComponent} from '../calculator/components/calculators/distance-calculator/distance-calculator';
import {TimeCalculatorComponent} from '../calculator/components/calculators/time-calculator/time-calculator';
import {TimetableComponent} from "../timetable/components/timetable/timetable.component";

export const appRoutes: Routes = [
  {
    path: 'distance',
    component: DistanceCalculatorComponent,
    data: {
      title: 'Distance calculator'
    }
  },
  {
    path: 'pace',
    component: PaceCalculatorComponent,
    data: {
      title: 'Pace calculator'
    }
  },
  {
    path: 'time',
    component: TimeCalculatorComponent,
    data: {
      title: 'Time calculator'
    }
  },
  {
    path: 'timetable',
    component: TimetableComponent,
    data: {
      title: 'Timetable'
    }
  },
  {
    path: '**',
    redirectTo: 'pace'
  },
];
