import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {TimeCalculatorService} from "../time-calculator/time-calculator.service";
import {PacePipe} from "../pipes/pace/pace.pipe";
import {SpeedPipe} from "../pipes/speed/speed.pipe";
import {DecimalPipe, registerLocaleData} from "@angular/common";
import localeNl from '@angular/common/locales/nl';
import {TimePipe} from "../pipes/time/time.pipe";

registerLocaleData(localeNl);

@NgModule({
  declarations: [
    AppComponent,
    PacePipe,
    SpeedPipe,
    TimePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-NL' },
    TimeCalculatorService,
    DecimalPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
