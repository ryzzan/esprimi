import * as fs from 'fs';
import { ComponentCodeTypeEnum } from '../../../enums/architecture';
import { MainInterface } from '../../../interfaces/main';
import { TextTransformation } from '../../../utils/text.transformation';
import { LoopbackArchitectureCode } from './code';

export class LoopbackArchitectureModel {
    static createArchitectureModel = async (
        componentCode: string | undefined,
        object: MainInterface
    ) => {
        let modelPath = TextTransformation.kebabfy(object.form?.id.replace("Form", '')!);

        const projectPath = `${object.projectPath}-api`;
        const projectAndModelPath = `${projectPath}/src/models/`;

        try {
            fs.readdirSync(projectAndModelPath);
            console.info(`Folder ${projectAndModelPath} already exists.`);
            await LoopbackArchitectureCode.writeCodeToFile(
                projectPath,
                modelPath,
                componentCode,
                ComponentCodeTypeEnum.Model,
                object
            );
        } catch (error: any) {
            console.info(`Folder ${projectAndModelPath}  doesn't exists. Going to make it.`);
            try {
                await LoopbackArchitectureCode.writeCodeToFile(
                    projectPath,
                    modelPath,
                    componentCode,
                    ComponentCodeTypeEnum.Model,
                    object
                );
            } catch (error: any) {
                await LoopbackArchitectureCode.writeCodeToFile(
                    projectPath,
                    modelPath,
                    componentCode,
                    ComponentCodeTypeEnum.Model,
                    object
                );
            }
        }
    }
}