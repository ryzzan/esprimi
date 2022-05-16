import pluralize = require("pluralize");
import { FormElementInterface } from "../../../../../interfaces/form";
import { MainInterface } from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

export interface IModelProperty {
    modulesImports: string,
    properties: string,
}

export class CodeToLoopbackModelProperty {
    static customProperties = (object: MainInterface): IModelProperty => {

        const elements = object.form?.elements;
        return CodeToLoopbackModelProperty.createModelProperties(elements!);
    }

    static createModelProperties = (elements: Array<FormElementInterface>): IModelProperty => {
        const validTypes = ['checkbox', 'radio', 'datalist', 'fieldset', 'input', 'select', 'slide', 'textarea', 'autocomplete']

        const stringTypes = ['email', 'password', 'tel', 'text', 'url', 'date', 'datetime-local', 'month', 'range', 'time', 'url', 'week']
        const numberTypes = ['number']

        let modulesImports = '';
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

                if (value.optionsApi) {

                    const className = TextTransformation.setIdToClassName(TextTransformation.pascalfy(pluralize.singular(value.optionsApi.endpoint.split('-').join(' '))))
                    const propertyName = className.charAt(0).toLowerCase() + className.slice(1)

                    modulesImports += `${className}, `

                    properties += `
                                @belongsTo(() => ${className})
                                ${propertyName}Id: String;
                                `
                } else {
                    properties += `
                                @property({
                                    type: '${propertyType}',
                                    ${value.isMultiple ? "itemType: 'any'," : 'jsonSchema: {nullable: true},'}
                                })
                                ${value.name}?: ${value.isMultiple ? 'any[]' : propertyType};
                                `
                }


            } else if (type === 'tabs') {

                element.tabs?.forEach(tab => {
                    const modelProperties = CodeToLoopbackModelProperty.createModelProperties(tab.elements)
                    modulesImports += modelProperties.modulesImports
                    properties += modelProperties.properties
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

        return { properties, modulesImports };
    }
}
