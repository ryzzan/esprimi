import * as fs from 'fs';
import { ComponentCodeTypeEnum } from '../../../enums/architecture';
import { MainInterface } from "../../../interfaces/main";
import { TextTransformation } from "../../../utils/text.transformation";
import { AngularArchitectureCode } from './code';

export class AngularArchitectureTemplate {
    static createArchitectureTemplate = async (
        templateCode: string | undefined,
        object: MainInterface
    ) => {
        let componentPath = '';
        
        if (object.form) componentPath = TextTransformation.kebabfy(object.form.id);
        if (object.table) componentPath = TextTransformation.kebabfy(object.table.id);
        if (object.module) componentPath = TextTransformation.kebabfy(object.module.id);
        
        const projectPath = object.projectPath;
        const projectAndComponentPath = `${projectPath}/src/app/components/${componentPath}`;
           
        try {
            console.info(`Pasta de componente existente.`);
            fs.readdirSync(projectAndComponentPath);
            await AngularArchitectureCode.writeCodeToFile(
                projectPath, 
                componentPath, 
                templateCode, 
                ComponentCodeTypeEnum.Template,
                object
            );
        } catch (error) {
            console.info(`Pasta de componente inexistente.`);
            try {
                fs.mkdirSync(projectAndComponentPath);
                await AngularArchitectureCode.writeCodeToFile(
                    projectPath, 
                    componentPath, 
                    templateCode, 
                    ComponentCodeTypeEnum.Template,
                    object
                );
            } catch (error) {
                await AngularArchitectureCode.writeCodeToFile(
                    projectPath, 
                    componentPath, 
                    templateCode, 
                    ComponentCodeTypeEnum.Template,
                    object
                );
            }
        }
    }
}