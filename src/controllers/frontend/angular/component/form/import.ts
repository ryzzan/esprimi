import { FormElementInterface } from "../../../../../interfaces/form";
import { ImportInterface } from "../../../../../interfaces/import";
import { MainInterface } from "../../../../../interfaces/main";


export class CodeToAngularFormComponentImport {
    static imports: ImportInterface = {
        hasArray: false,
        hasAutocomplete: false
    };

    static customImports = (object: MainInterface): string => {        
        if (object.form) {            
            const elements = object.form.elements;
            
            CodeToAngularFormComponentImport.createFormImports(elements, object);
            
            const formArray = CodeToAngularFormComponentImport.imports.hasArray ? ', FormArray' : '';
            const formAutocomplete = CodeToAngularFormComponentImport.imports.hasAutocomplete 
                                        ? `import {COMMA, ENTER} from '@angular/cdk/keycodes';
                                        import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
                                        import {MatChipInputEvent} from '@angular/material/chips';
                                        import { MyPerformance } from "src/app/utils/performance";`
                                        : '';
            const componentCode = `
            import { FormBuilder, FormGroupDirective, FormGroup${formArray} } from '@angular/forms';
            import { ActivatedRoute, Router } from '@angular/router';
            import { MatSnackBar } from '@angular/material/snack-bar';
            ${formAutocomplete}

            import { %pascalfy(${object.form?.id})%Service } from './%kebabfy${object.form?.id}%.service';
            import { MyErrorHandler } from '../../utils/error-handler';
            `;

            return componentCode;
        }

        return '';
    }

    static createFormImports = (elements: Array<FormElementInterface>, object: MainInterface): ImportInterface => {
        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            if (element.tabs) {
                element.tabs.forEach(elementTab => {
                    CodeToAngularFormComponentImport.createFormImports(elementTab.elements, object);
                })
            }

            if (element.array) {
                CodeToAngularFormComponentImport.imports.hasArray = true;
                CodeToAngularFormComponentImport.createFormImports(element.array.elements, object);
            }

            if (element.autocomplete) {
                CodeToAngularFormComponentImport.imports.hasAutocomplete = true;
            }
        }

        return CodeToAngularFormComponentImport.imports;
    }
}