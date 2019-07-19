import {Routes} from '@angular/router';
import {PaceCalculatorComponent} from '../calculator/components/calculators/pace-calculator/pace-calculator';
import {DistanceCalculatorComponent} from '../calculator/components/calculators/distance-calculator/distance-calculator';
import {TimeCalculatorComponent} from '../calculator/components/calculators/time-calculator/time-calculator';

export const appRoutes: Routes = [
  {
    path: 'distance',
    component: DistanceCalculatorComponent,
    data: {
      title: 'Distance calculator: pace + time = distance'
    }
  },
  {
    path: 'pace',
    component: PaceCalculatorComponent,
    data: {
      title: 'Pace calculator: distance + time = pace'
    }
  },
  {
    path: 'time',
    component: TimeCalculatorComponent,
    data: {
      title: 'Time calculator: distance + pace = time'
    }
  },
  {
    path: '**',
    redirectTo: 'pace'
  },
];
