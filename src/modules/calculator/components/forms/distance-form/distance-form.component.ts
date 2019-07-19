import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {isInteger} from '../../../validators/is-integer/is-integer';

@Component({
  selector: 'rc-distance-form',
  templateUrl: './distance-form.component.html',
})
export class DistanceFormComponent implements OnInit {
  @Input() parentForm: FormGroup;

  distanceForm: FormGroup;

  ngOnInit() {
    this.distanceForm = new FormGroup({
      kilometers: new FormControl(0, [ isInteger ]),
      meters: new FormControl(0, [ isInteger ]),
    });

    this.parentForm.addControl('distance', this.distanceForm);
  }

  setDistance(kilometers: number, meters: number) {
    this.distanceForm.setValue({
      kilometers,
      meters,
    });
  }
}
