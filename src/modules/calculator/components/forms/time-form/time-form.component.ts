import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {isInteger} from '../../../validators/is-integer/is-integer';

@Component({
  selector: 'rc-time-form',
  templateUrl: './time-form.component.html',
})
export class TimeFormComponent implements OnInit {
  @Input() parentForm: FormGroup;

  timeForm: FormGroup;

  ngOnInit() {
    this.timeForm = new FormGroup({
      hours: new FormControl(null, [ isInteger ]),
      minutes: new FormControl(null, [ isInteger ]),
      seconds: new FormControl(null, [ isInteger ]),
    });

    this.parentForm.addControl('time', this.timeForm);
  }
}
