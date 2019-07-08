import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './components/app/app.component';
import {NavigationComponent} from "./components/navigation/navigation.component";
import {TimetableModule} from "../timetable/timetable.module";


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    TimetableModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
