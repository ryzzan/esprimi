import {
    InputInterface
} from "../../../../../interfaces/form";

export class CodeToAngularFormTemplateSlide {
    static createSlide(slide: InputInterface): string {
        let codeSlide = `
        <mat-form-field>
            <mat-label>${slide.label}</mat-label>
            <mat-slide-toggle formControlName="${slide.name}">
                ${slide.label}
            </mat-slide-toggle>
        </mat-form-field>
        `;

        return codeSlide;
    }
}