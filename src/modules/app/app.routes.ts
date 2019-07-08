import {Routes} from '@angular/router';
import {PaceCalculatorComponent} from '../calculator/components/pace-calculator/pace-calculator';
import {DistanceCalculatorComponent} from '../calculator/components/distance-calculator/distance-calculator';
import {TimeCalculatorComponent} from '../calculator/components/time-calculator/time-calculator';

export const appRoutes: Routes = [
  { path: 'distance', component: DistanceCalculatorComponent },
  { path: 'pace', component: PaceCalculatorComponent },
  { path: 'time', component: TimeCalculatorComponent },
  { path: '**', redirectTo: 'pace' },
];
