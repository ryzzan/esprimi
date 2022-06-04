import {
    FormElementInterface
} from "../../../../../interfaces/form";
import {
    MainInterface
} from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

export class CodeToAngularChartComponentConstructorArg {
    static customConstructorArg = (objectToCode: MainInterface): string => {
        let hasAction = '';
        if (objectToCode.chart) {
            if (objectToCode.chart.actions) {
                hasAction = `
                            this.${objectToCode.chart.actions.id}Form = this._formBuilder.group({
                                ${CodeToAngularChartComponentConstructorArg.createFormBuilder(objectToCode.chart.actions.elements, objectToCode)}
                            });
                            `;
            }

            const componentCode = `
            ${hasAction}
            
            this.${objectToCode.chart.id}SearchForm = this._formBuilder.group({
                searchInput: [null, []],
            });

            this.set${
                TextTransformation.pascalfy(objectToCode.chart.id)
            }Service(
                this.mainFilter
            );

            try {
                this._activatedRoute.params.subscribe(async (routeParams) => {
                    this.${objectToCode.chart.id}Id = routeParams["id"];
                });
            } catch (error: any) {
                const message = this._errorHandler.apiErrorMessage(error.error.message);
                this.sendErrorMessage(message);
            };
            `;

            return componentCode;
        }

        return '';
    }

    static createFormBuilder(elements: Array <FormElementInterface> , objectToCode: MainInterface): string {
        let codeElements = '';

        codeElements += CodeToAngularChartComponentConstructorArg.createFormBuilderElements(elements, objectToCode);

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
                    validators = CodeToAngularChartComponentConstructorArg.createFormBuilderValidators(element.validators);

                    if (key === 'tabs') {
                        const tabs = object[key];
                        if (tabs) {
                            tabs.forEach((tab: any) => {
                                tab.elements.forEach((tabElement: any) => {
                                    codeElement += CodeToAngularChartComponentConstructorArg.createFormBuilder(tabElement, objectToCode);
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

    static createFormBuilderValidators(validators: Array <string> ): string {
        let codeValidator = '';
        validators.forEach(validator => {
            codeValidator += `Validators.${validator},`;
        });
        return codeValidator;
    }
}