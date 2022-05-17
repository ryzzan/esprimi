import * as fs from 'fs';
import { ComponentCodeTypeEnum } from '../../../enums/architecture';
import { MainInterface } from "../../../interfaces/main";
import { TextTransformation } from '../../../utils/text.transformation';
import { AngularArchitectureCode } from './code';

export class AngularArchitectureService {
    static createArchitectureService = async (
        serviceCode: string | undefined,
        object: MainInterface
    ) => {
        let componentPath = '';
        
        if (object.form) componentPath = TextTransformation.kebabfy(object.form.id);
        if (object.table) componentPath = TextTransformation.kebabfy(object.table.id);
        if (object.chart) componentPath = TextTransformation.kebabfy(object.chart.id);
        if (object.list) componentPath = TextTransformation.kebabfy(object.list.id);
        if (object.module) componentPath = TextTransformation.kebabfy(object.module.id);
        
        const projectPath = object.projectPath;
        const projectAndComponentPath = `${projectPath}/src/app/components/${componentPath}`;
           
        try {
            fs.readdirSync(projectAndComponentPath);
            console.info(`Folder ${projectAndComponentPath}  already exists.`);
            await AngularArchitectureCode.writeCodeToFile(
                projectPath, 
                componentPath, 
                serviceCode, 
                ComponentCodeTypeEnum.Service,
                object
            );
        } catch (error: any) {
            console.info(`Folder ${projectAndComponentPath}  doesn't exists. Going to make it.`);
            try {
                fs.mkdirSync(projectAndComponentPath);
                await AngularArchitectureCode.writeCodeToFile(
                    projectPath, 
                    componentPath, 
                    serviceCode, 
                    ComponentCodeTypeEnum.Service,
                    object
                );
            } catch (error: any) {
                await AngularArchitectureCode.writeCodeToFile(
                    projectPath, 
                    componentPath, 
                    serviceCode, 
                    ComponentCodeTypeEnum.Service,
                    object
                );
            }
        }
    }
}