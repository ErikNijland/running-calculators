import {Component, OnInit} from '@angular/core';
import {TimeCalculatorService} from "../time-calculator/time-calculator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rows;
  constructor(private timeCalculatorService: TimeCalculatorService) {}

  ngOnInit() {
    this.rows = this.timeCalculatorService.getTableData();
  }
}
