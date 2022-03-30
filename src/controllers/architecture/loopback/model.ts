import * as fs from 'fs';
import { ComponentCodeTypeEnum } from '../../../enums/architecture';
import { MainInterface } from '../../../interfaces/main';
import { LoopbackArchitectureCode } from './code';

export class LoopbackArchitectureModel {
    static createArchitectureModel = async (
        componentCode: string | undefined,
        object: MainInterface
    ) => {
        let modelPath = object.model?.id!;

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
        } catch (error) {
            console.info(`Folder ${projectAndModelPath}  doesn't exists. Going to make it.`);
            try {
                await LoopbackArchitectureCode.writeCodeToFile(
                    projectPath,
                    modelPath,
                    componentCode,
                    ComponentCodeTypeEnum.Model,
                    object
                );
            } catch (error) {
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