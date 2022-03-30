import * as fs from 'fs';
import { ComponentCodeTypeEnum } from '../../../enums/architecture';
import { MainInterface } from '../../../interfaces/main';
import { LoopbackArchitectureCode } from './code';

export class LoopbackArchitectureController {
    static createArchitectureController = async (
        componentCode: string | undefined,
        object: MainInterface
    ) => {
        let controllerPath = object.model?.id!;

        const projectPath = `${object.projectPath}-api`;
        const projectAndControllerPath = `${projectPath}/src/controllers/`;

        try {
            fs.readdirSync(projectAndControllerPath);
            console.info(`Folder ${projectAndControllerPath} already exists.`);
            await LoopbackArchitectureCode.writeCodeToFile(
                projectPath,
                controllerPath,
                componentCode,
                ComponentCodeTypeEnum.Controller,
                object
            );
        } catch (error) {
            console.info(`Folder ${projectAndControllerPath}  doesn't exists. Going to make it.`);
            try {
                await LoopbackArchitectureCode.writeCodeToFile(
                    projectPath,
                    controllerPath,
                    componentCode,
                    ComponentCodeTypeEnum.Controller,
                    object
                );
            } catch (error) {
                await LoopbackArchitectureCode.writeCodeToFile(
                    projectPath,
                    controllerPath,
                    componentCode,
                    ComponentCodeTypeEnum.Controller,
                    object
                );
            }
        }
    }
}