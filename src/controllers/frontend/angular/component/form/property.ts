import { FormElementInterface } from "../../../../../interfaces/form";
import { MainInterface } from "../../../../../interfaces/main";

export class CodeToAngularFormComponentProperty {
    static customProperties = (object: MainInterface): string => {
        if (object.form) {
            const elements = object.form.elements;
            const selectProperties = CodeToAngularFormComponentProperty.createFormProperties(elements);
            console.log(selectProperties, 10);
            const componentCode = `
                                ${selectProperties}
                                ${object.form.id}Id: string;
                                isAddModule: boolean;
                                ${object.form.id}Form: FormGroup;
                                isLoading = false;
                                `;

            console.log(componentCode, 22);
            return componentCode;
        }

        return '';
    }

    static createFormProperties = (elements: Array<FormElementInterface>): string => {
        console.log(elements, 27);
        let selectProperties = '';

        elements.forEach(element => {
            console.log(element, 31);
            if (element.tabs) {
                element.tabs.forEach(elementTab => {
                    CodeToAngularFormComponentProperty.createFormProperties(elementTab.elements);
                })
            }

            if (element.array) { console.log(element, 34);
                CodeToAngularFormComponentProperty.createFormProperties(element.array.elements);
            }

            if (element.select) { console.log(element, 38);
                if (element.select.optionsObject) {                        
                    selectProperties += `${element.select.name}SelectObject = ${JSON.stringify(element.select.optionsObject)};`;
                }

                if (element.select.optionsApiEndpoint) {
                    selectProperties += `${element.select.name}SelectObject = []`;
                }
            }
        });
        console.log(selectProperties, 52);
        return selectProperties;
    }
}
