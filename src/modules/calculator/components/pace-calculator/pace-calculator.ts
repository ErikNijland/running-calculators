import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CalculatorService} from '../../services/calculator/calculator.service';

@Component({
  selector: 'rc-pace-calculator',
  templateUrl: './pace-calculator.html',
})
export class PaceCalculatorComponent implements OnInit {
  paceForm: FormGroup;
  paceInSecs: number;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit() {
    this.paceForm = new FormGroup({});
  }

  calculate() {
    console.log(this.paceForm.valid);
    if (!this.paceForm.valid) {
      this.paceInSecs = null;

      return;
    }

    this.paceInSecs = this.calculatorService.calculatePace(this.paceForm.value);
    console.log(this.paceInSecs);
  }
}
