import pluralize = require("pluralize");
import { FormElementInterface } from "../../../../../interfaces/form";
import { MainInterface } from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

export interface IRepositoryProperty {
    modulesImports: string,
    repositoriesImports: string,
    properties: string,
    getters: string,
    variables: string,
}

export class CodeToLoopbackRepositoryProperty {
    static customProperties = (
        object: MainInterface,
        modelName: string
    ): IRepositoryProperty => {

        const elements = object.form?.elements;
        return CodeToLoopbackRepositoryProperty.createRepositoryProperties(elements!, modelName);
    }

    static createRepositoryProperties = (elements: Array<FormElementInterface>, modelName: string): IRepositoryProperty => {
        const validTypes = ['checkbox', 'radio', 'datalist', 'fieldset', 'input', 'select', 'slide', 'textarea', 'autocomplete']

        let modulesImports = '';
        let repositoriesImports = '';
        let properties = '';
        let getters = '';
        let variables = '';

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            const type = Object.keys(element)[0]
            const value = Object.values(element)[0]

            if (validTypes.includes(type)) {

                if (value.optionsApi) {
                    const className = TextTransformation.setIdToClassName(TextTransformation.pascalfy(pluralize.singular(value.optionsApi.endpoint.split('-').join(' '))))
                    const propertyName = className.charAt(0).toLowerCase() + className.slice(1)

                    modulesImports += `${className},`
                    repositoriesImports += `${className}Repository,`

                    properties += `public readonly ${propertyName}: BelongsToAccessor<${className}, typeof ${modelName}.prototype._id>;`

                    getters += `@repository.getter('${className}Repository') ${propertyName}RepositoryGetter: Getter<${className}Repository>,`

                    variables += `
                                this.${propertyName} = this.createBelongsToAccessorFor('${propertyName}', ${propertyName}RepositoryGetter,);
                                this.registerInclusionResolver('${propertyName}', this.${propertyName}.inclusionResolver);
                                `
                }


            } else if (type === 'tabs') {

                element.tabs?.forEach(tab => {
                    const repositoryProperties = CodeToLoopbackRepositoryProperty.createRepositoryProperties(tab.elements, modelName)

                    modulesImports += repositoryProperties.modulesImports
                    repositoriesImports += repositoryProperties.repositoriesImports
                    properties += repositoryProperties.properties
                    getters += repositoryProperties.getters
                    variables += repositoryProperties.variables
                })

            }

        }

        return {
            modulesImports,
            repositoriesImports,
            properties,
            getters,
            variables,
        };
    }
}
