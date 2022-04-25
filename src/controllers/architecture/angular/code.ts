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
        
        try {
            fs.writeFileSync(componentFilePath, code);
            console.info(`File ${componentPath} already exists.`);
            console.info(`File successfully written in ${componentFilePath}.`);
        } catch (error: any) {
            console.info(`File ${componentPath} doesn't exist.`);

            try {
                chp.execSync(
                    `ng g c components/${componentPath} --skip-import`,
                    {cwd: projectPath}
                );
            } catch (error: any) {
                console.warn(error);
            }

            fs.writeFileSync(componentFilePath, code);
            
            console.info(`File successfully created in ${componentFilePath}.`);
        }
        /** Make code prettier */

        /** Test and validate code */
    }
}