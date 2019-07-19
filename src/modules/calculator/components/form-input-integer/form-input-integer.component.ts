import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'rc-form-input-integer',
  templateUrl: './form-input-integer.component.html',
})
export class FormInputIntegerComponent {
  @Input() control: FormControl;
  @Input() id: string;
  @Input() label: string;
}
