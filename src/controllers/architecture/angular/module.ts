import * as fs from 'fs';
import * as chp from 'child_process';
import { BuildedCode, MainInterface } from "../../../interfaces/main";
import { TextTransformation } from "../../../utils/text.transformation";
import { AngularArchitectureCode } from './code';
import { ComponentCodeTypeEnum } from '../../../enums/architecture';

export class AngularArchitectureModule {
    static createArchitectureModule = async (
        moduleCode: BuildedCode | undefined,
        object: MainInterface
    ) => {
        if (!object.module) return false;
        
        let modulePath = TextTransformation.kebabfy(object.module.id);
        
        const projectPath = object.projectPath;
        const projectAndModulePath = `${projectPath}/src/app/modules/${modulePath}`;
           
        try {
            fs.readdirSync(projectAndModulePath);
            await AngularArchitectureCode.writeCodeToFile(
                projectPath, 
                modulePath, 
                moduleCode?.template, 
                ComponentCodeTypeEnum.Template,
                object
            );
            console.info(`Pasta de módulo existente.`);
        } catch (error) {
            console.info(`Pasta de módulo inexistente.`);
            chp.execSync(
                `ng g module modules/${modulePath} --module modules/main --route ${modulePath} --routing --routing-scope Child`, 
                {cwd: projectPath}
            );
            await AngularArchitectureCode.writeCodeToFile(
                projectPath, 
                modulePath, 
                moduleCode?.template, 
                ComponentCodeTypeEnum.Template,
                object
            );
        }
    }
}