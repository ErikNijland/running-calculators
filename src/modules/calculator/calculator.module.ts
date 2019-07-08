import {NgModule} from "@angular/core";
import {CalculatorService} from "./services/calculator/calculator.service";

@NgModule({
  providers: [
    CalculatorService,
  ]
})
export class CalculatorModule {}
