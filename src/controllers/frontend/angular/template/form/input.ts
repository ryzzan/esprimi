import { InputInterface } from "../../../../../interfaces/form";

export class CodeToAngularFormTemplateInput {
    static createInput = (input: InputInterface): string => {
        const placeholder = input.placeholder ?
            `placeholder="${input.placeholder}"` :
            '';
        const required = input.isRequired?'required' : '';

        const codeInput = `<mat-form-field>
            <mat-label>${input.label}</mat-label>
            <input matInput type="${input.type}" formControlName="${input.name}" ${placeholder} ${required} autocomplete="new-password">
        </mat-form-field>`;

        return codeInput;
    }
}