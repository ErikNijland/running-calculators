import {FormControl, ValidationErrors} from '@angular/forms';
import {isInteger as isIntegerLodash} from 'lodash';

export function isInteger(control: FormControl): ValidationErrors {
  const isValid = isIntegerLodash(control.value);

  return isValid ? null : { integer: true };
}
