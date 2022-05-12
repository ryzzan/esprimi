import { MainInterface } from "../../../../interfaces/main";

export class CodeToAngularModuleImport {
  static customImports = (object: MainInterface): string => {
    if (object.module) {
      const imports = CodeToAngularModuleImport.createModuleImports(object);

      const componentCode = `
      ${imports}
      `;

      return componentCode;
    }

    return "";
  };

  static createModuleImports = (object: MainInterface) => {
    let imports = "";
    if (object.module) {
      const components = object.module.components;

      for (let index = 0; index < components.length; index++) {
        const component = components[index];

        imports += `import { %pascalfy(${component})%Component } from 'src/app/components/%kebabfy(${component})%/%kebabfy(${component})%.component';`;
      }
    }

    return imports;
  };
}
