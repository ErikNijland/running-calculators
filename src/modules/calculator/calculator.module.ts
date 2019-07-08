import {NgModule} from '@angular/core';
import {CalculatorService} from './services/calculator/calculator.service';
import {DistanceCalculatorComponent} from './components/distance-calculator/distance-calculator';
import {PaceCalculatorComponent} from './components/pace-calculator/pace-calculator';
import {TimeCalculatorComponent} from './components/time-calculator/time-calculator';
import {DistanceFormComponent} from './components/distance-form/distance-form.component';
import {PaceFormComponent} from './components/pace-form/pace-form.component';
import {TimeFormComponent} from './components/time-form/time-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FormatterModule} from '../formatter/formatter.module';

@NgModule({
  declarations: [
    DistanceCalculatorComponent,
    DistanceFormComponent,
    PaceCalculatorComponent,
    PaceFormComponent,
    TimeCalculatorComponent,
    TimeFormComponent,
  ],
  providers: [
    CalculatorService,
  ],
  imports: [
    CommonModule,
    FormatterModule,
    ReactiveFormsModule,
  ]
})
export class CalculatorModule {}
