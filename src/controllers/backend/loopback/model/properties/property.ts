import { FormElementInterface } from "../../../../../interfaces/form";
import { MainInterface } from "../../../../../interfaces/main";

export class CodeToLoopbackModelProperty {
    static customProperties = (object: MainInterface): string => {

        const elements = object.form?.elements;
        const properties = CodeToLoopbackModelProperty.createModelProperties(elements!);

        const componentCode = `${properties}`;

        return componentCode;
    }

    static createModelProperties = (elements: Array<FormElementInterface>): string => {
        const validTypes = ['checkbox', 'radio', 'datalist', 'fieldset', 'input', 'select', 'slide', 'textarea', 'autocomplete']

        const stringTypes = ['email', 'password', 'tel', 'text', 'url', 'date', 'datetime-local', 'month', 'range', 'time', 'url', 'week']
        const numberTypes = ['number']

        let properties = '';

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            const type = Object.keys(element)[0]
            const value = Object.values(element)[0]

            if (validTypes.includes(type)) {

                const propertyType = value.isMultiple ?
                    'array' :
                    (
                        stringTypes.includes(value.type) ? 'String' :
                            (numberTypes.includes(value.type) ? 'number' : 'any')
                    )

                properties += `
                            @property({
                                type: '${propertyType}',
                                jsonSchema: {nullable: true},
                                ${value.isMultiple ? "itemType: 'any'," : ""}
                            })
                            ${value.name}?: ${value.isMultiple ? 'any[]' : propertyType};
                            `

            } else if (type === 'tabs') {

                element.tabs?.forEach(tab => {
                    properties += CodeToLoopbackModelProperty.createModelProperties(tab.elements)
                })

            } else if (type === 'array') {

                properties += `
                            @property({
                                type: 'array',
                                itemType: 'object',
                            })
                            ${value.id}?: object[];
                            `

            }

        }

        return properties;
    }
}
