import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CalculatorService} from '../../../services/calculator/calculator.service';

@Component({
  selector: 'rc-time-calculator',
  templateUrl: './time-calculator.html',
})
export class TimeCalculatorComponent implements OnInit {
  timeForm: FormGroup;
  timeInSeconds: number;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit() {
    this.timeForm = new FormGroup({});
  }

  calculate() {
    if (!this.timeForm.valid) {
      this.timeInSeconds = null;

      return;
    }

    this.timeInSeconds = this.calculatorService.calculateTime(this.timeForm.value);
  }
}
