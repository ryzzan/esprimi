import * as fs from 'fs';
import * as chp from 'child_process';
import { ComponentCodeTypeEnum } from '../../../enums/architecture';
import { MainInterface } from '../../../interfaces/main';
import { TextTransformation } from '../../../utils/text.transformation';
import { AngularArchitectureCode } from './code';

export class AngularArchitectureComponent {
    static createArchitectureComponent = async (
        componentCode: string | undefined,
        object: MainInterface
    ) => {
        let componentPath = '';
                
        if (object.form) componentPath = TextTransformation.kebabfy(object.form.id);
        if (object.table) componentPath = TextTransformation.kebabfy(object.table.id);
        if (object.chart) componentPath = TextTransformation.kebabfy(object.chart.id);
        
        const projectPath = object.projectPath;
        const projectAndComponentPath = `${projectPath}/src/app/components/${componentPath}`;
        const projectFolder = projectPath.split(/[\/]+/).pop();
        
        try {
            fs.readdirSync(projectAndComponentPath);
            console.info(`Folder ${projectAndComponentPath} already exists.`);
            await AngularArchitectureCode.writeCodeToFile(
                projectPath, 
                componentPath, 
                componentCode, 
                ComponentCodeTypeEnum.Component,
                object
            );
        } catch (error: any) {
            console.info(`Folder ${projectAndComponentPath}  doesn't exists. Going to make it.`);
            try {
                chp.execSync(
                    `ng g c ${componentPath} --skip-import`, 
                    {cwd: projectFolder}
                );
                await AngularArchitectureCode.writeCodeToFile(
                    projectPath, 
                    componentPath, 
                    componentCode, 
                    ComponentCodeTypeEnum.Component,
                    object
                );
            } catch (error: any) {
                await AngularArchitectureCode.writeCodeToFile(
                    projectPath, 
                    componentPath, 
                    componentCode, 
                    ComponentCodeTypeEnum.Component,
                    object
                );
            }
        }        
    }
}