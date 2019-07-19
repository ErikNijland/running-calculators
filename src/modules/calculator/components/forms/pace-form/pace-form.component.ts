import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {isInteger} from '../../../validators/is-integer/is-integer';

@Component({
  selector: 'rc-pace-form',
  templateUrl: './pace-form.component.html',
})
export class PaceFormComponent implements OnInit {
  @Input() parentForm: FormGroup;

  paceForm: FormGroup;

  ngOnInit() {
    this.paceForm = new FormGroup({
      minutes: new FormControl(0, [ isInteger ]),
      seconds: new FormControl(0, [ isInteger ]),
    });

    this.parentForm.addControl('pace', this.paceForm);
  }
}
