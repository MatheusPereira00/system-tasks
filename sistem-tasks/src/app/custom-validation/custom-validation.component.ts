import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { getValidatorErrorMessage } from './validators-utils';

@Component({
  selector: 'app-custom-validation',
  template: `<div class="errorMessage" *ngIf="errorMessage !== null">
    {{ errorMessage }}
  </div>`,
  styles: [
    '.errorMessage { color: red; margin-bottom: 1.7rem; margin-top: .2rem; margin-left: .5rem; } ',
  ],
})
export class CustomValidationComponent {
  @Input() public controlContainer!: AbstractControl;

  get errorMessage() {
    for (const validatorName in this.controlContainer?.errors) {
      if (this.controlContainer.touched)
        return getValidatorErrorMessage(
          validatorName,
          this.controlContainer.errors[validatorName]
        );
    }
    return null;
  }
}
