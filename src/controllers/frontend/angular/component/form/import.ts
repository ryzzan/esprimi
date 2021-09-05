import { MainInterface } from "../../../../../interfaces/main";
import { CodeToAngularFormComponentProperty } from "./property";

export class CodeToAngularFormComponentImport extends CodeToAngularFormComponentProperty {
    customImports = (object: MainInterface): string => {
        let hasArray = '';
        if (object.form) {
            const elements = object.form.elements;
            
            elements.forEach(element => {
                if (element.array) hasArray = ', FormArray';
            });

            const componentCode = `
                                import { FormBuilder, FormGroup${hasArray} } from '@angular/forms';
                                import { ActivatedRoute } from '@angular/router';
                                import { MatSnackBar } from '@angular/material/snack-bar';

                                import { %pascalfy(${object.form.id})%Service } from './%kebabfy${object.form.id}%.service';
                                `;

            return componentCode;
        }

        return '';
    }
}