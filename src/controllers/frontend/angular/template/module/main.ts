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
        let forms = 0;

        for (let index = 0; index < module.components.length; index++) {
            const element = TextTransformation.kebabfy(module.components[index]);

            const componentType = element.split('-')[element.split('-').length - 1];
            if (componentType === 'form') forms = forms + 1;
        }

        if (forms > 1) components += `<mat-stepper>`;
        module.components.forEach(component => {
            if (forms > 1) components += `<mat-step> <ng-template matStepLabel>${TextTransformation.kebabfy(component)}</ng-template>`;
            components += `<app-${TextTransformation.kebabfy(component)}></app-${TextTransformation.kebabfy(component)}> `;
            if (forms > 1) components += `</mat-step>`;
        });
        if (forms > 1) components += `</mat-stepper>`;

        return components;
    }
}