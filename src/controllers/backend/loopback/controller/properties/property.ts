import pluralize = require("pluralize");
import { FormElementInterface } from "../../../../../interfaces/form";
import { MainInterface } from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

export class CodeToLoopbackControllerProperty {
    static customProperties = (object: MainInterface): string => {

        const elements = object.form?.elements;
        const properties = CodeToLoopbackControllerProperty.createRepositoryProperties(elements!);

        const componentCode = `${properties}`;

        return componentCode;
    }

    static createRepositoryProperties = (elements: Array<FormElementInterface>): string => {
        const validTypes = ['checkbox', 'radio', 'datalist', 'fieldset', 'input', 'select', 'slide', 'textarea', 'autocomplete']

        let properties = '';

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            const type = Object.keys(element)[0]
            const value = Object.values(element)[0]

            if (validTypes.includes(type)) {

                if (value.optionsApi) {
                    const propertyName = TextTransformation.setIdToPropertyName(TextTransformation.pascalfy(pluralize.singular(value.optionsApi.endpoint.split('-').join(' '))))

                    properties += `'${propertyName.charAt(0).toLowerCase() + propertyName.slice(1)}',`
                }


            } else if (type === 'tabs') {

                element.tabs?.forEach(tab => {
                    properties += CodeToLoopbackControllerProperty.createRepositoryProperties(tab.elements)
                })

            }

        }

        return properties
    }
}
