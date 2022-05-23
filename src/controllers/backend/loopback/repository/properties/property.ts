import { CodeToLoopbackRepositoryModelRelated } from './related-model';
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
    relatedModelsAndRepositories: string,
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
        const relatedModelCode = new CodeToLoopbackRepositoryModelRelated

        const validTypes = ['checkbox', 'radio', 'datalist', 'fieldset', 'input', 'select', 'slide', 'textarea', 'autocomplete']

        let modulesImports = '';
        let repositoriesImports = '';
        let properties = '';
        let getters = '';
        let variables = '';
        let relatedModelsAndRepositories = '';

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            const type = Object.keys(element)[0]
            const value = Object.values(element)[0]

            if (validTypes.includes(type)) {

                if (value.optionsApi) {
                    const modelNamePascalCase = modelName.charAt(0).toLowerCase() + modelName.slice(1)
                    const className = TextTransformation.setIdToClassName(TextTransformation.pascalfy(pluralize.singular(value.optionsApi.endpoint.split('-').join(' '))))
                    const propertyName = className.charAt(0).toLowerCase() + className.slice(1)

                    modulesImports += `${className},`
                    repositoriesImports += modelName !== className ? `${className}Repository,` : ''

                    getters += `@repository.getter('${className}Repository') ${propertyName}RepositoryGetter: Getter<${className}Repository>,`

                    if (value.isMultiple) {
                        getters += `@repository.getter('${modelName}Has${className}Repository') ${modelNamePascalCase}Has${className}RepositoryGetter: Getter<${modelName}Has${className}Repository>,`

                        properties += `
                            public readonly ${propertyName}: HasManyThroughRepositoryFactory<${className}, typeof ${className}.prototype._id,
                                ${modelName}Has${className},
                                typeof ${modelName}.prototype._id
                            >;
                            `

                        variables += `
                                this.${propertyName} = this.createHasManyThroughRepositoryFactoryFor('__${value.name}', Getter.fromValue(this), ${modelNamePascalCase}Has${className}RepositoryGetter,);
                                this.registerInclusionResolver('__${value.name}', this.${propertyName}.inclusionResolver);
                                `

                        relatedModelsAndRepositories += relatedModelCode.createRepositoryRelatedModels(modelName, className)
                    } else {
                        properties += `public readonly ${propertyName}: BelongsToAccessor<${className}, typeof ${modelName}.prototype._id>;`

                        variables += `
                                this.${propertyName} = this.createBelongsToAccessorFor('${propertyName}', ${propertyName}RepositoryGetter,);
                                this.registerInclusionResolver('${propertyName}', this.${propertyName}.inclusionResolver);
                                `
                    }
                }


            } else if (type === 'tabs') {

                element.tabs?.forEach(tab => {
                    const repositoryProperties = CodeToLoopbackRepositoryProperty.createRepositoryProperties(tab.elements, modelName)

                    modulesImports += repositoryProperties.modulesImports
                    repositoriesImports += repositoryProperties.repositoriesImports
                    properties += repositoryProperties.properties
                    getters += repositoryProperties.getters
                    variables += repositoryProperties.variables
                    relatedModelsAndRepositories += repositoryProperties.relatedModelsAndRepositories
                })

            }

        }

        return {
            modulesImports,
            repositoriesImports,
            properties,
            getters,
            variables,
            relatedModelsAndRepositories,
        };
    }
}
