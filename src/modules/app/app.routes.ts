import {Routes} from "@angular/router";
import {PaceCalculator} from "../calculator/components/pace-calculator/pace-calculator";
import {DistanceCalculator} from "../calculator/components/distance-calculator/distance-calculator";
import {TimeCalculator} from "../calculator/components/time-calculator/time-calculator";

export const appRoutes: Routes = [
  { path: 'distance', component: DistanceCalculator },
  { path: 'pace', component: PaceCalculator },
  { path: 'time', component: TimeCalculator },
  { path: '**', redirectTo: 'distance' },
];
