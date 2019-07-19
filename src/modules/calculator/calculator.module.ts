import {NgModule} from '@angular/core';
import {CalculatorService} from './services/calculator/calculator.service';
import {DistanceCalculatorComponent} from './components/calculators/distance-calculator/distance-calculator';
import {PaceCalculatorComponent} from './components/calculators/pace-calculator/pace-calculator';
import {TimeCalculatorComponent} from './components/calculators/time-calculator/time-calculator';
import {DistanceFormComponent} from './components/forms/distance-form/distance-form.component';
import {PaceFormComponent} from './components/forms/pace-form/pace-form.component';
import {TimeFormComponent} from './components/forms/time-form/time-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FormatterModule} from '../formatter/formatter.module';
import {FormInputIntegerComponent} from './components/form-input-integer/form-input-integer.component';
import {ScrollIntoViewDirective} from './directives/scroll-into-view/scroll-into-view.directive';
import {SelectAllTextDirective} from './directives/select-all-text/select-all-text.directive';

@NgModule({
  declarations: [
    DistanceCalculatorComponent,
    DistanceFormComponent,
    FormInputIntegerComponent,
    PaceCalculatorComponent,
    PaceFormComponent,
    ScrollIntoViewDirective,
    SelectAllTextDirective,
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
