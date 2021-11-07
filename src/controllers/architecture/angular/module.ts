import * as fs from 'fs';
import * as chp from 'child_process';
import { MainInterface } from "../../../interfaces/main";
import { TextTransformation } from "../../../utils/text.transformation";
import { AngularArchitectureCode } from './code';
import { ComponentCodeTypeEnum } from '../../../enums/architecture';

export class AngularArchitectureModule {
    static createArchitectureModule = async (
        moduleCode: string | undefined,
        object: MainInterface
    ) => {
        if (!object.module) return false;

        let modulePath = TextTransformation.kebabfy(object.module.id);
        
        const projectPath = object.projectPath;
        const projectAndModulePath = `${projectPath}/src/app/components/${modulePath}`;
        const projectFolder = projectPath.split(/[\/]+/).pop();
           
        try {
            console.info(`Pasta de módulo existente.`);
            fs.readdirSync(projectAndModulePath);
            await AngularArchitectureCode.writeCodeToFile(projectPath, modulePath, moduleCode, ComponentCodeTypeEnum.Controller);
        } catch (error) {
            console.info(`Pasta de módulo inexistente.`);
            try {
                chp.execSync(
                    `ng g c ${modulePath}`, 
                    {cwd: projectFolder}
                );
                await AngularArchitectureCode.writeCodeToFile(projectPath, modulePath, moduleCode, ComponentCodeTypeEnum.Controller);
            } catch (error) {
                await AngularArchitectureCode.writeCodeToFile(projectPath, modulePath, moduleCode, ComponentCodeTypeEnum.Controller);
            }
        }
    }
}