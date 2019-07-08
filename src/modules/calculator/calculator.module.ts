import {NgModule} from "@angular/core";
import {CalculatorService} from "./services/calculator/calculator.service";
import {DistanceCalculator} from "./components/distance-calculator/distance-calculator";
import {PaceCalculator} from "./components/pace-calculator/pace-calculator";
import {TimeCalculator} from "./components/time-calculator/time-calculator";
import {DistanceFormComponent} from "./components/distance-form/distance-form.component";
import {PaceFormComponent} from "./components/pace-form/pace-form.component";
import {TimeFormComponent} from "./components/time-form/time-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    DistanceCalculator,
    DistanceFormComponent,
    PaceCalculator,
    PaceFormComponent,
    TimeCalculator,
    TimeFormComponent,
  ],
  providers: [
    CalculatorService,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CalculatorModule {}
