import { MainInterface } from "../../../../interfaces/main";

export class CodeToAngularModuleDeclaration {
    static customDeclarations = (object: MainInterface): string => {        
        if (object.module) {
            const imports = CodeToAngularModuleDeclaration.createModuleDeclarations(object);

            const componentCode = `
            ${imports}
            `;

            return componentCode;
        }

        return '';
    }

    static createModuleDeclarations = (object: MainInterface) => {
        let imports = '';
        if (object.module) {            
            const components = object.module.components;
            
            for (let index = 0; index < components.length; index++) {
                const component = components[index];
    
                imports += `%pascalfy(${component})%Component, `;
            }
        }


        return imports;
    }
}