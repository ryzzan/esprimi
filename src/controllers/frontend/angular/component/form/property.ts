import { FormElementInterface } from "../../../../../interfaces/form";
import { MainInterface } from "../../../../../interfaces/main";

export class CodeToAngularFormComponentProperty {
    static customProperties = (object: MainInterface): string => {
        if (object.form) {
            const elements = object.form.elements;
            const properties = CodeToAngularFormComponentProperty.createFormProperties(elements);
            
            const componentCode = `
                                ${properties}
                                ${object.form.id}Id: string;
                                isAddModule: boolean;
                                ${object.form.id}Form: FormGroup;
                                isLoading = false;
                                `;
                                
            return componentCode;
        }

        return '';
    }

    static createFormProperties = (elements: Array<FormElementInterface>): string => {
        let properties = '';

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            if (element.tabs) {
                element.tabs.forEach(elementTab => {
                    properties += CodeToAngularFormComponentProperty.createFormProperties(elementTab.elements);
                })
            }

            if (element.array) {
                properties += CodeToAngularFormComponentProperty.createFormProperties(element.array.elements);
            }

            if (element.select) {
                if (element.select.optionsObject) {                        
                    properties += `${element.select.name}SelectObject = ${JSON.stringify(element.select.optionsObject)};`;
                }

                if (element.select.optionsApiEndpoint) {
                    properties += `${element.select.name}SelectObject = []`;
                }
            }            
        }

        return properties;
    }
}
