import { RadioInterface } from "../../../../../interfaces/form";

export class CodeToAngularFormTemplateRadio {
    static createRadio(radio: RadioInterface): string {
        const required = radio.isRequired?'required' : '';
        
        const codeRadio = `<label id="${radio.name}-radio-group-label">{{${radio.label}}}</label>
        <mat-radio-group
          aria-labelledby="${radio.name}-radio-group-label"
          class="${radio.name}-radio-group"
          formControleName="${radio.name}">
          <mat-radio-button class="${radio.name}-radio-button" *ngFor="let ${radio.name}Item of ${radio.name}RadioObject" [value]="${radio.name}Item.value">
            {{${radio.name}Item.label}}
          </mat-radio-button>
        </mat-radio-group>`;

        return codeRadio;
    }
}