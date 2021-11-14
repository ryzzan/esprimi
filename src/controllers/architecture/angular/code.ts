import * as fs from 'fs';
import * as chp from 'child_process';

import { ComponentCodeTypeEnum } from "../../../enums/architecture";
import { MainInterface } from '../../../interfaces/main';

export class AngularArchitectureCode {
    static writeCodeToFile = async (
        projectPath: string, 
        componentPath: string, 
        code: string | undefined, 
        codeType: string,
        object: MainInterface
    ) => {
        let componentFilePath = '';
        code ? code = code : code = '';
        
        if (codeType === ComponentCodeTypeEnum.Component) 
            componentFilePath = object.module ? `${projectPath}/src/app/modules/${componentPath}/${componentPath}.component.ts` : `${projectPath}/src/app/components/${componentPath}/${componentPath}.component.ts`;
        if (codeType === ComponentCodeTypeEnum.Template) 
            componentFilePath = object.module ? `${projectPath}/src/app/modules/${componentPath}/${componentPath}.component.html` : `${projectPath}/src/app/components/${componentPath}/${componentPath}.component.html`;
        if (codeType === ComponentCodeTypeEnum.Service) 
            componentFilePath = object.module ? `${projectPath}/src/app/modules/${componentPath}/${componentPath}.service.ts` : `${projectPath}/src/app/components/${componentPath}/${componentPath}.service.ts`;
        if (codeType === ComponentCodeTypeEnum.Module) 
            componentFilePath = object.module ? `${projectPath}/src/app/modules/${componentPath}/${componentPath}.module.ts` : `${projectPath}/src/app/components/${componentPath}/${componentPath}.module.ts`;
        if (codeType === ComponentCodeTypeEnum.Navigation)
            componentFilePath = `${projectPath}/src/app/modules/main/main.component.ts`;

        try {
            const file = fs.readFileSync(componentFilePath);
            
            console.info(`Arquivo ${componentPath} existente.`);
            fs.writeFileSync(componentFilePath, code);
            console.info(`Aquivo escrito com sucesso em ${componentFilePath}.`);
        } catch (error) {
            console.info(`Arquivo ${componentPath} inexistente.`);

            try {
                chp.execSync(
                    `ng g c components/${componentPath} --skip-import`,
                    {cwd: projectPath}
                );
            } catch (error) {
                console.warn(error);
            }

            fs.writeFileSync(componentFilePath, code);
            
            console.info(`Aquivo criado e escrito com sucesso em ${componentFilePath}`);
        }
        /** Make code prettier */

        /** Test and validate code */
    }
}