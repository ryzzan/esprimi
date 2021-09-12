import {
    InputInterface
} from "../../../../../interfaces/form";

export class CodeToAngularFormTemplateSlide {
    static createSlide(slide: InputInterface): string {
        let codeSlide = `<mat-form-field>`;
        codeSlide += `<mat-label>${slide.label}</mat-label>`;
        codeSlide += `<mat-slide-toggle formControlName="${slide.name}">${slide.label}</mat-slide-toggle>`;
        codeSlide += `</mat-form-field>`;

        return codeSlide;
    }
}