import { FormInputTypeEnum } from "../../../../../enums/form";
import { InputInterface } from "../../../../../interfaces/form";

export class CodeToAngularFormTemplateInput {
  static createInput = (input: InputInterface): string => {
    const placeholder = input.placeholder
      ? `placeholder="${input.placeholder}"`
      : "";
    const required = input.isRequired ? "required" : "";
    const mask = input.mask ? `mask="${input.mask}"` : "";
    if (input.type === FormInputTypeEnum.File) {
      const codeInput = `
        <input type="file" class="file-input" (change)="onFileSelected($event)" #fileUpload multiple>
        <div class="file-upload">
            {{fileName || "Escolha arquivo para enviar"}}
        
            <button mat-mini-fab color="primary" class="upload-btn"
                (click)="fileUpload.click()">
                <mat-icon>attach_file</mat-icon>
            </button>
        </div>`;
      return codeInput;
    }

    if (input.isMultipleLines) {
      const codeInput = `
        <mat-form-field class="full-width">
            <mat-label>${input.label}</mat-label>
            <textarea matInput formControlName="${input.name}" ${placeholder} ${required}>
            </textarea>
        </mat-form-field>`;
      return codeInput;
    }

    const codeInput = `
    <mat-form-field>
        <mat-label>${input.label}</mat-label>
        <input matInput type="${input.type}" formControlName="${input.name}" ${placeholder} ${required} ${mask} autocomplete="new-password">
    </mat-form-field>`;
    return codeInput;
  };
}
