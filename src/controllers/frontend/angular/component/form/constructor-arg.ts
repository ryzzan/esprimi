import {
    FormElementInterface
} from "../../../../../interfaces/form";
import {
    MainInterface
} from "../../../../../interfaces/main";

import { CodeToAngularFormComponentConstructorParam } from "./constructor-param";

export class CodeToAngularFormComponentConstructorArg extends CodeToAngularFormComponentConstructorParam {
    customConstructorArg = (objectToCode: MainInterface): string => {
        if (objectToCode.form) {
            const componentCode = `
                                this.${objectToCode.form.id}Id = this._activatedRoute.snapshot.params['id'];
                                this.isAddModule = !this.${objectToCode.form.id}Id;
                                this.${objectToCode.form.id}Form = this._formBuilder.group({
                                    ${this.createFormBuilder(objectToCode.form.elements, objectToCode)}
                                });
                            `;

            return componentCode;
        }

        return '';
    }

    createFormBuilder(elements: Array <FormElementInterface> , objectToCode: MainInterface): string {
        let codeElements = '';

        codeElements += this.createFormBuilderElements(elements, objectToCode);

        return codeElements;
    }

    private createFormBuilderElements(
        elements: Array<FormElementInterface>,
        objectToCode: MainInterface
    ): string {
        let codeElement = '';

        elements.forEach((object: any) => {
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    const element = object[key];
                    let validators = '';

                    if (element?.validators) 
                    validators = this.createFormBuilderValidators(element.validators);

                    if (key === 'tabs') {
                        const tabs = object[key];
                        if (tabs) {
                            tabs.forEach((tab: any) => {
                                codeElement += this.createFormBuilder(tab.elements, objectToCode);
                            });
                        }
                    }

                    if (key === 'array') {
                        const array = object[key];
                        if (array) {
                            codeElement += `${array.id}: this._formBuilder.array([]),`;
                        }
                    }

                    if (key === 'input') {
                        if (element?.type === 'email') element.validators?.push('email');
                        if (element?.isRequired) element.validators?.push('required');
                        
                        codeElement += `${element?.name}: 
                                        [
                                            ${element?.value?element?.value : null}, 
                                            [${validators}]
                                        ],`;
                    }

                    if (key === 'select') {
                        if (element?.isRequired) element.validators?.push('required');
                        
                        codeElement += `${element?.name}: 
                        [null, 
                            [${validators}]
                        ],`;
                    }
                }
            }
        });

        return codeElement;
    }

    private createFormBuilderValidators(validators: Array <string> ): string {
        let codeValidator = '';
        validators.forEach(validator => {
            codeValidator += `Validators.${validator},`;
        });
        return codeValidator;
    }
}