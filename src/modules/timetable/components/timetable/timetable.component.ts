import {Component} from "@angular/core";
import {CalculatorService} from "../../../calculator/services/calculator/calculator.service";

@Component({
  selector: 'rc-timetable',
  templateUrl: './timetable.component.html'
})
export class TimetableComponent {
  rows;
  constructor(private calculatorService: CalculatorService) {}

  ngOnInit() {
    this.rows = this.calculatorService.getTableData();
  }
}
