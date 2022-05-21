import { MainInterface } from "../../../../interfaces/main";
import { TextTransformation } from "../../../../utils/text.transformation";

export class CodeToAngularModuleImportDeclaration {
  static customImportDeclarations = (object: MainInterface): string => {
    if (object.module) {
      const importDeclarations = CodeToAngularModuleImportDeclaration.createModuleImportDeclarations(object);

      const componentCode = `
      ${importDeclarations}
      `;

      return componentCode;
    }

    return "";
  };

  static createModuleImportDeclarations = (object: MainInterface) => {
    let importDeclarations = "";
    let hasChart = false;
    
    if (object.module) {
      const components = object.module.components;

      for (let index = 0; index < components.length; index++) {
        const component = components[index];
        const componentKebabfied = TextTransformation.kebabfy(component);

        if (componentKebabfied.split('-').pop() === "chart") {
          hasChart = true;
        }
      }
    }

    if (hasChart) {
      importDeclarations += `NgChartsModule,`;
    }

    return importDeclarations;
  };
}
