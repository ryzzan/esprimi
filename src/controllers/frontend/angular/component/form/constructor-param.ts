import {
    MainInterface
} from "../../../../../interfaces/main";

export class CodeToAngularFormComponentConstructorParam {
    static customConstructorParam = (object: MainInterface): string => {
        if (object.form) {
            const componentCode = `
                                private _formBuilder: FormBuilder, 
                                private _activatedRoute: ActivatedRoute, 
                                private _${object.form.id}Service: %pascalfy(${object.form.id})%Service,
                                private _errorHandler: MyErrorHandler
                                `;

            return componentCode;
        }

        return '';
    }
}