import {FormControl, ValidationErrors} from '@angular/forms';
import {isInteger as isIntegerLodash, isNil} from 'lodash';

export function isInteger(control: FormControl): ValidationErrors {
  const isValid = isNil(control.value) || isIntegerLodash(control.value);

  return isValid ? null : { integer: true };
}
