import pluralize = require("pluralize");
import { FormElementInterface } from "../../../../../interfaces/form";
import { MainInterface } from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

export interface IModelProperty {
    modulesImports: string,
    relatedModelsImports: string,
    properties: string,
}

export class CodeToLoopbackModelProperty {
    static customProperties = (object: MainInterface, modelName: string): IModelProperty => {

        const elements = object.form?.elements;
        return CodeToLoopbackModelProperty.createModelProperties(elements!, modelName);
    }

    static createModelProperties = (elements: Array<FormElementInterface>, modelName: string): IModelProperty => {
        const validTypes = ['checkbox', 'radio', 'datalist', 'fieldset', 'input', 'select', 'slide', 'textarea', 'autocomplete']

        const stringTypes = ['email', 'password', 'tel', 'text', 'url', 'date', 'datetime-local', 'month', 'range', 'time', 'url', 'week']
        const numberTypes = ['number']

        let modulesImports = '';
        let properties = '';
        let relatedModelsImports = '';

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
                    const modelNamePascalfy = modelName.charAt(0).toUpperCase() + modelName.slice(1)

                    modulesImports += (modelNamePascalfy !== className ? `${className}, ` : '')

                    if (value.isMultiple) {
                        relatedModelsImports += `${modelNamePascalfy}Has${className}`

                        properties += `
                                    @property({ type: 'array', itemType: 'any'})
                                    ${value.name}?: any[];

                                    @hasMany(() => ${className}, {
                                        through: {
                                            model: () => ${modelNamePascalfy}Has${className},
                                            ${modelNamePascalfy === className ? `keyFrom: '${propertyName}Id', keyTo: '${propertyName}RelatedId',` : ''}
                                        }
                                    })
                                    ${propertyName}: ${className}[];
                                    `
                    } else {
                        properties += `
                                    @belongsTo(() => ${className})
                                    ${propertyName}Id: String;
                                    `
                    }

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
                    const modelProperties = CodeToLoopbackModelProperty.createModelProperties(tab.elements, modelName)
                    modulesImports += modelProperties.modulesImports
                    properties += modelProperties.properties
                    relatedModelsImports += modelProperties.relatedModelsImports
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

        return { properties, modulesImports, relatedModelsImports };
    }
}
