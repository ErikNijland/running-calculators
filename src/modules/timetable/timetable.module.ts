import {NgModule} from '@angular/core';
import {TimetableComponent} from './components/timetable/timetable.component';
import {FormatterModule} from '../formatter/formatter.module';
import {CommonModule} from '@angular/common';
import {CalculatorModule} from '../calculator/calculator.module';

@NgModule({
  declarations: [
    TimetableComponent,
  ],
  imports: [
    CalculatorModule,
    CommonModule,
    FormatterModule,
  ],
  exports: [
    TimetableComponent,
  ]
})
export class TimetableModule {}
