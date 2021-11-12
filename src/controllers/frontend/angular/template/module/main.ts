import {
    MainInterface
} from "../../../../../interfaces/main";
import { ModuleInterface } from "../../../../../interfaces/module";
import {
    TextTransformation
} from "../../../../../utils/text.transformation";

export class CodeToAngularModuleTemplate {
    createModuleSkeleton(object: MainInterface): string {
        if (!object.module) return '';
        const components = this.createModuleComponents(object.module);
        const moduleTemplate = `
                            ${components}
                            `;

        return moduleTemplate;
    }

    private createModuleComponents = (module: ModuleInterface): string => {
        let components = '';
        module.components.forEach(component => {
            components += `<app-${TextTransformation.kebabfy(component)}></app-${TextTransformation.kebabfy(component)}> `;
        });

        return components;
    }
}