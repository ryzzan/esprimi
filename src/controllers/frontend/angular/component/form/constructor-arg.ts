import {
    FormElementInterface
} from "../../../../../interfaces/form";
import {
    MainInterface
} from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

export class CodeToAngularFormComponentConstructorArg {
    static customConstructorArg = (objectToCode: MainInterface): string => {
        if (objectToCode.form) {
            const componentCode = `
                                    try {
                                        this._activatedRoute.params.subscribe(async (routeParams) => {
                                            this.${objectToCode.form.id}Id = routeParams['id'];
                                            this.isAddModule = !this.${objectToCode.form.id}Id;
                                        
                                            if (this.${objectToCode.form.id}Id) {
                                                const res: any = await this._${objectToCode.form.id}Service.find(this.${objectToCode.form.id}Id);
                                                this.${objectToCode.form.id}Form.patchValue(res.data);
                                            }
                                        });
                                    } catch(error: any) {
                                        const message = this._errorHandler.apiErrorMessage(error.error.message);
                                        this.sendErrorMessage(message);
                                    };
                                    
                                    
                                    this.${objectToCode.form.id}Form = this._formBuilder.group({
                                        ${CodeToAngularFormComponentConstructorArg.createFormBuilder(objectToCode.form.elements, objectToCode)}
                                    });

                                    this.checkOptionsCreation(
                                        [
                                            ${CodeToAngularFormComponentConstructorArg.createObjectService(objectToCode.form.elements, objectToCode)}
                                        ],
                                        0
                                    );
                                `;

            return componentCode;
        }

        return '';
    }

    static createFormBuilder(
        elements: Array <FormElementInterface> , 
        objectToCode: MainInterface
    ): string {
        let codeElements = '';

        codeElements += CodeToAngularFormComponentConstructorArg.createFormBuilderElements(elements, objectToCode);

        return codeElements;
    }

    static createFormBuilderElements(
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
                                        [{
                                            ${element?.value ? `value: '${element?.value}'` : `value: null`}
                                            ${element?.isDisabled ? `, disabled: true` : `, disabled: false`}
                                        },
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

    static createFormBuilderValidators(validators: Array <string> ): string {
        let codeValidator = '';
        validators.forEach(validator => {
            codeValidator += `Validators.${validator},`;
        });
        return codeValidator;
    }

    static createObjectService = (
        elements: Array<FormElementInterface>,
        objectToCode: MainInterface
    ): string => {
        let selectObjectServiceCode = '';
        let checkboxObjectServiceCode = '';

        elements.forEach((object: any) => {
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    const element = object[key];
                    if (key === 'tabs') {
                        const tabs = object[key];
                        if (tabs) {
                            tabs.forEach((tab: any) => {
                                selectObjectServiceCode += CodeToAngularFormComponentConstructorArg.createObjectService(tab.elements, objectToCode);
                                checkboxObjectServiceCode += CodeToAngularFormComponentConstructorArg.createObjectService(tab.elements, objectToCode);
                            });
                        }
                    }

                    if (key === 'array') {
                        const array = object[key];

                        selectObjectServiceCode += CodeToAngularFormComponentConstructorArg.createObjectService(array.elements, objectToCode);
                        checkboxObjectServiceCode += CodeToAngularFormComponentConstructorArg.createObjectService(array.elements, objectToCode);
                    }

                    if (key === 'select') {
                        if (element?.optionsApi) {
                            selectObjectServiceCode += `this.set${TextTransformation.pascalfy(element.name)}SelectObject,`;
                        }
                    }

                    if (key === 'checkbox') {
                        if (element?.optionsApi) {
                            checkboxObjectServiceCode += ` 
                            this._${objectToCode.form?.id}Service.${object.checkbox.name}SelectObjectGetAll()
                            .then(
                                (array: any) => {
                                    const data = array.data;

                                    if (array.data?.result) {
                                        for (let index = 0; index < array.data?.result.length; index++) {
                                          const object = array.data.result[index];
                                          this.${object.checkbox.name}SelectObject.push({
                                            label: object['${element.optionsApi.labelField}'], 
                                            value: object['${element.optionsApi.valueField}']
                                          });
                                        }
                                    }
                                }
                            );`;
                        }
                    }
                }
            }
        });

        return selectObjectServiceCode;
    }
}