import { CodeToLoopbackControllerRelatedProperties } from './related-properties';
import pluralize = require("pluralize");
import { FormElementInterface } from "../../../../../interfaces/form";
import { MainInterface } from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

export interface IControllerRelatedProperties {
    repositoriesImportsCode: string,
    propertiesCode: string,
    createCode: string,
    deleteCode: string,
    includePropertiesCode: string,
}

export class CodeToLoopbackControllerProperty {
    static customProperties = (object: MainInterface, modelName: string): IControllerRelatedProperties => {

        const elements = object.form?.elements;
        return CodeToLoopbackControllerProperty.createRepositoryProperties(elements!, modelName);
    }

    static createRepositoryProperties = (elements: Array<FormElementInterface>, modelName: string): IControllerRelatedProperties => {
        const multipleRelatedProperty = new CodeToLoopbackControllerRelatedProperties

        const validTypes = ['checkbox', 'radio', 'datalist', 'fieldset', 'input', 'select', 'slide', 'textarea', 'autocomplete']

        let repositoriesImportsCode = ''
        let propertiesCode = ''
        let createCode = ''
        let deleteCode = ''
        let includePropertiesCode = ''

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            const type = Object.keys(element)[0]
            const value = Object.values(element)[0]

            if (validTypes.includes(type)) {

                if (value.optionsApi) {

                    const className = TextTransformation.setIdToClassName(TextTransformation.pascalfy(pluralize.singular(value.optionsApi.endpoint.split('-').join(' '))))

                    if (value.isMultiple) {
                        const propertyName = className.charAt(0).toLowerCase() + className.slice(1)

                        repositoriesImportsCode += multipleRelatedProperty.createRepositoriesImports(modelName, className)
                        propertiesCode += multipleRelatedProperty.createProperties(modelName, className)
                        createCode += multipleRelatedProperty.createCreateAllMethods(modelName, className, value.name)
                        deleteCode += multipleRelatedProperty.createDeleteAllMethods(modelName, className, value.name)

                        includePropertiesCode += `'${propertyName}',`
                    } else {
                        const propertyName = TextTransformation.setIdToPropertyName(TextTransformation.pascalfy(pluralize.singular(value.optionsApi.endpoint.split('-').join(' '))))
                        includePropertiesCode += `'${propertyName.charAt(0).toLowerCase() + propertyName.slice(1)}',`
                    }
                }


            } else if (type === 'tabs') {

                element.tabs?.forEach(tab => {
                    const code = CodeToLoopbackControllerProperty.createRepositoryProperties(tab.elements, modelName)

                    repositoriesImportsCode += code.repositoriesImportsCode
                    propertiesCode += code.propertiesCode
                    createCode += code.createCode
                    deleteCode += code.deleteCode
                    includePropertiesCode += code.includePropertiesCode
                })

            }

        }

        return {
            repositoriesImportsCode,
            propertiesCode,
            createCode,
            deleteCode,
            includePropertiesCode,
        }
    }
}
