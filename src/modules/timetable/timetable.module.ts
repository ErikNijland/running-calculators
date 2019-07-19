import {NgModule} from '@angular/core';
import {TimetableComponent} from './components/timetable/timetable.component';
import {FormatterModule} from '../formatter/formatter.module';
import {CommonModule} from '@angular/common';
import {TimetableService} from "./services/timetable/timetable.service";

@NgModule({
  declarations: [
    TimetableComponent,
  ],
  providers: [
    TimetableService,
  ],
  imports: [
    CommonModule,
    FormatterModule,
  ],
  exports: [
    TimetableComponent,
  ]
})
export class TimetableModule {}
