import {NgModule} from "@angular/core";
import {CalculatorService} from "./services/calculator/calculator.service";
import {DistanceCalculator} from "./components/distance-calculator/distance-calculator";
import {PaceCalculator} from "./components/pace-calculator/pace-calculator";
import {TimeCalculator} from "./components/time-calculator/time-calculator";

@NgModule({
  declarations: [
    DistanceCalculator,
    PaceCalculator,
    TimeCalculator,
  ],
  providers: [
    CalculatorService,
  ]
})
export class CalculatorModule {}
