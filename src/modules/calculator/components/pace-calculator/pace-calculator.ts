import {Component, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'rc-pace-calculator',
  templateUrl: './pace-calculator.html',
})
export class PaceCalculator implements OnInit {
  paceForm: FormGroup;

  ngOnInit() {
    this.paceForm = new FormGroup({});
  }
}
