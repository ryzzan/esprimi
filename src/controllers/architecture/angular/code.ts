import * as fs from 'fs';
import * as chp from 'child_process';

import { ComponentCodeTypeEnum } from "../../../enums/architecture";
import { MainInterface } from '../../../interfaces/main';

export class AngularArchitectureCode {
    static writeCodeToFile = async (
        projectPath: string, 
        componentPath: string, 
        componentCode: string | undefined, 
        componentCodeType: string,
        object: MainInterface
    ) => {
        let componentFilePath = '';
        componentCode ? componentCode = componentCode : componentCode = '';
        
        if (componentCodeType === ComponentCodeTypeEnum.Component) 
            componentFilePath = object.module ? `${projectPath}/src/app/modules/${componentPath}/${componentPath}.component.ts` : `${projectPath}/src/app/components/${componentPath}/${componentPath}.component.ts`;
        if (componentCodeType === ComponentCodeTypeEnum.Template) 
            componentFilePath = object.module ? `${projectPath}/src/app/modules/${componentPath}/${componentPath}.component.html` : `${projectPath}/src/app/components/${componentPath}/${componentPath}.component.html`;
        if (componentCodeType === ComponentCodeTypeEnum.Service) 
            componentFilePath = object.module ? `${projectPath}/src/app/modules/${componentPath}/${componentPath}.service.ts` : `${projectPath}/src/app/components/${componentPath}/${componentPath}.service.ts`;
        if (componentCodeType === ComponentCodeTypeEnum.Module) 
            componentFilePath = object.module ? `${projectPath}/src/app/modules/${componentPath}/${componentPath}.module.ts` : `${projectPath}/src/app/components/${componentPath}/${componentPath}.module.ts`;

        try {
            const file = fs.readFileSync(componentFilePath);
            console.info(`Arquivo ${componentPath} existente.`);
            fs.writeFileSync(componentFilePath, componentCode);
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

            fs.writeFileSync(componentFilePath, componentCode);
            
            console.info(`Aquivo criado e escrito com sucesso em ${componentFilePath}`);
        }
        /** Make code prettier */

        /** Test and validate code */
    }
}