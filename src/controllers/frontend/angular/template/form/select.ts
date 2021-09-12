import { SelectInterface } from "../../../../../interfaces/form";

export class CodeToAngularFormTemplateSelect {
    static createSelect(select: SelectInterface): string {
        const multiple = select.isMultiple?'multiple' : '';
        const required = select.isRequired?'required' : '';

        const codeSelect = `<mat-form-field>
                          <mat-label>${select.label}</mat-label>
                          <mat-select formControlName="${select.name}" ${required} ${multiple}>
                            <mat-option *ngFor="let ${select.name}Item of ${select.name}SelectObject" [value]="${select.name}Item.value">
                              {{${select.name}Item.label}}
                            </mat-option>
                          </mat-select>
                        </mat-form-field>`;

        return codeSelect;
    }
}