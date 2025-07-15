import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { parsePhoneNumberFromString, CountryCode } from 'libphonenumber-js';

export function phoneNumberValidator(countryCode: CountryCode): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null; // إذا القيمة فارغة، لا ترجع خطأ
    }

    const phoneNumber = parsePhoneNumberFromString(control.value, countryCode);

    if (!phoneNumber || !phoneNumber.isValid()) {
      return { invalidPhoneNumber: true };
    }

    return null;
  };
}
