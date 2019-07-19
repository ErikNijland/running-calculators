import {LOCALE_ID, NgModule} from '@angular/core';
import {PacePipe} from './pipes/pace/pace.pipe';
import {SpeedPipe} from './pipes/speed/speed.pipe';
import {TimePipe} from './pipes/time/time.pipe';
import localeNl from '@angular/common/locales/nl';
import {DecimalPipe, registerLocaleData} from '@angular/common';
import {DistancePipe} from './pipes/distance/distance.pipe';

registerLocaleData(localeNl);

@NgModule({
  declarations: [
    DistancePipe,
    PacePipe,
    SpeedPipe,
    TimePipe,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-NL' },
    DecimalPipe,
  ],
  exports: [
    DistancePipe,
    PacePipe,
    SpeedPipe,
    TimePipe,
  ]
})
export class FormatterModule {}
