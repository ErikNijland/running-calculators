import {Routes} from '@angular/router';
import {PaceCalculatorComponent} from '../calculator/components/calculators/pace-calculator/pace-calculator';
import {DistanceCalculatorComponent} from '../calculator/components/calculators/distance-calculator/distance-calculator';
import {TimeCalculatorComponent} from '../calculator/components/calculators/time-calculator/time-calculator';

export const appRoutes: Routes = [
  { path: 'distance', component: DistanceCalculatorComponent },
  { path: 'pace', component: PaceCalculatorComponent },
  { path: 'time', component: TimeCalculatorComponent },
  { path: '**', redirectTo: 'pace' },
];
