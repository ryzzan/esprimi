import { FormElementInterface } from "../../../../../interfaces/form";
import { MainInterface } from "../../../../../interfaces/main";

export class CodeToAngularFormComponentImport {
    static customImports = (object: MainInterface): string => {        
        if (object.form) {
            const elements = object.form.elements;
            const imports = CodeToAngularFormComponentImport.createFormImports(elements, object);

            const componentCode = `
            ${imports}
            import { FormBuilder, FormGroup } from '@angular/forms';
            import { ActivatedRoute } from '@angular/router';
            import { MatSnackBar } from '@angular/material/snack-bar';

            import { %pascalfy(${object.form?.id})%Service } from './%kebabfy${object.form?.id}%.service';
            import { MyErrorHandler } from 'src/utils/error-handler';
            `;

            return componentCode;
        }

        return '';
    }

    static createFormImports = (elements: Array<FormElementInterface>, object: MainInterface) => {
        let imports = '';

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            if (element.tabs) {
                element.tabs.forEach(elementTab => {
                    imports += CodeToAngularFormComponentImport.createFormImports(elementTab.elements, object);
                })
            }

            if (element.array) {
                imports += `import { FormArray } from '@angular/forms';`;
                imports += CodeToAngularFormComponentImport.createFormImports(element.array.elements, object);
            }
        }

        return imports;
    }
}