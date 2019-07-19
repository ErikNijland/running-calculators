import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CalculatorService} from '../../../services/calculator/calculator.service';

@Component({
  selector: 'rc-distance-calculator',
  templateUrl: './distance-calculator.html',
})
export class DistanceCalculatorComponent implements OnInit {
  distanceForm: FormGroup;
  distanceInMeters: number;

  constructor(private calculatorService: CalculatorService) {}

  ngOnInit() {
    this.distanceForm = new FormGroup({});
  }

  calculate() {
    if (!this.distanceForm.valid) {
      this.distanceInMeters = null;

      return;
    }

    this.distanceInMeters = this.calculatorService.calculateDistance(this.distanceForm.value);
  }
}
