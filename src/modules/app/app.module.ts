import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {TimetableModule} from '../timetable/timetable.module';
import {CalculatorModule} from '../calculator/calculator.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    CalculatorModule,
    TimetableModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
