export class CodeToLoopbackControllerRelatedProperties {

    createRepositoriesImports = (mainProperty: string, secondProperty: string): string => {
        const mainPropertyCamelCase = mainProperty.charAt(0).toUpperCase() + mainProperty.slice(1)
        return `${mainPropertyCamelCase}Has${secondProperty}Repository, `
    }

    createProperties = (mainProperty: string, secondProperty: string): string => {
        const mainPropertyPascalfy = mainProperty.charAt(0).toUpperCase() + mainProperty.slice(1)

        return `
            @repository(${mainPropertyPascalfy}Has${secondProperty}Repository)
            private ${mainProperty}Has${secondProperty}Repository: ${mainPropertyPascalfy}Has${secondProperty}Repository, 
        `
    }

    createCreateAllMethods = (mainProperty: string, secondProperty: string, relatedPropertyName: string): string => {
        const mainPropertyCamelCase = mainProperty.charAt(0).toLowerCase() + mainProperty.slice(1)
        const secondPropertyCamelCase = secondProperty.charAt(0).toLowerCase() + secondProperty.slice(1)

        return `
            await this.${mainPropertyCamelCase}Has${secondProperty}Repository.createAll(
                ((dataToWorkInRelation.${relatedPropertyName} || []) as any[]).map(${secondPropertyCamelCase} => {
                    return {
                        ${mainPropertyCamelCase}Id: idToWorkInRelation, 
                        ${secondPropertyCamelCase}${mainPropertyCamelCase === secondPropertyCamelCase ? 'Related' : ''}Id: ${secondPropertyCamelCase},
                    };
                })
            ); 
        `
    }

    createDeleteAllMethods = (mainProperty: string, secondProperty: string, relatedPropertyName: string): string => {
        const mainPropertyCamelCase = mainProperty.charAt(0).toLowerCase() + mainProperty.slice(1)
        const secondPropertyCamelCase = secondProperty.charAt(0).toLowerCase() + secondProperty.slice(1)

        return `
            await this.${mainPropertyCamelCase}Has${secondProperty}Repository.deleteAll({
                or: ((dataToWorkInRelation.${relatedPropertyName} || []) as any[]).map(${secondPropertyCamelCase} => {
                    return {${secondPropertyCamelCase}Id: ${secondPropertyCamelCase}._id};
                })
            }); 
        `
    }
}
