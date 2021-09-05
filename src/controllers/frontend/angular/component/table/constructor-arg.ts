import {
    FormElementInterface
} from "../../../../../interfaces/form";
import {
    MainInterface
} from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";
import { CodeToAngularTableComponentConstructorParam } from "./constructor-param";

export class CodeToAngularFormComponentConstructorArg extends CodeToAngularTableComponentConstructorParam {
    customConstructorArg = (objectToCode: MainInterface): string => {
        let hasAction = '';
        if (objectToCode.table) {
            if (objectToCode.table.actions) {
                hasAction = `
                            this.${objectToCode.table.actions.id}Form = this._formBuilder.group({
                                ${this.createFormBuilder(objectToCode.table.actions.elements, objectToCode)}
                            });
                            `;
            }

            const componentCode = `
                                ${hasAction}
                                this._${objectToCode.table.id}Service.getAll().then((result) => {
                                    this.${objectToCode.table.id}DataSource = result;
                                    this.isLoading = false;
                                }).catch(err => {
                                    this.isLoading = false;
                                    const message = this.errorHandler.apiErrorMessage(err.error.error.message);
                                    this._snackbar.open(message, undefined, {
                                        duration: 4 * 1000,
                                    });
                                })
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
                                tab.elements.forEach((tabElement: any) => {
                                    codeElement += this.createFormBuilder(tabElement, objectToCode);
                                });
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