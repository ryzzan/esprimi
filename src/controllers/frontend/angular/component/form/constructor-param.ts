import {
    MainInterface
} from "../../../../../interfaces/main";
import {
    CodeToAngularFormComponentMethod
} from "./method";

export class CodeToAngularFormComponentConstructorParam extends CodeToAngularFormComponentMethod {
    customConstructorParam = (object: MainInterface): string => {
        if (object.form) {
            const componentCode = `
                                private _formBuilder: FormBuilder, 
                                private _activatedRoute: ActivatedRoute, 
                                private _${object.form.id}Service: %pascalfy(${object.form.id})%Service,
                                private _snackbar: MatSnackBar
                                `;

            return componentCode;
        }

        return '';
    }
}