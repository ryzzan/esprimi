import * as fs from 'fs';
import * as chp from 'child_process';

import { ComponentCodeTypeEnum } from "../../../enums/architecture";

export class AngularArchitectureCode {
    static writeCodeToFile = async (
        projectPath: string, 
        componentPath: string, 
        componentCode: string | undefined, 
        componentCodeType: string
    ) => {
        let componentFilePath = '';
        componentCode ? componentCode = componentCode : componentCode = '';
        
        if (componentCodeType === ComponentCodeTypeEnum.Controller) 
            componentFilePath = `${projectPath}/src/app/components/${componentPath}/${componentPath}.component.ts`;
        if (componentCodeType === ComponentCodeTypeEnum.Template) 
            componentFilePath = `${projectPath}/src/app/components/${componentPath}/${componentPath}.component.html`;
        if (componentCodeType === ComponentCodeTypeEnum.Service) 
            componentFilePath = `${projectPath}/src/app/components/${componentPath}/${componentPath}.service.ts`;

        try {
            const file = fs.readFileSync(componentFilePath);
            console.info(`Arquivo ${componentPath} existente.`);
            fs.writeFileSync(componentFilePath, componentCode);
            console.info(`Aquivo escrito com sucesso em ${componentFilePath}.`);
        } catch (error) {
            console.info(`Arquivo ${componentPath} inexistente.`);

            try {
                chp.execSync(
                    `ng g c components/${componentPath} --module modules/main`,
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