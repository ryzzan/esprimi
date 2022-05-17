import * as fs from 'fs';
import { ComponentCodeTypeEnum } from '../../../enums/architecture';
import { MainInterface } from '../../../interfaces/main';
import { TextTransformation } from '../../../utils/text.transformation';
import { LoopbackArchitectureCode } from './code';

export class LoopbackArchitectureController {
    static createArchitectureController = async (
        componentCode: string | undefined,
        object: MainInterface
    ) => {
        let controllerPath = TextTransformation.kebabfy(object.form?.id.replace("Form", '')!);

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
        } catch (error: any) {
            console.info(`Folder ${projectAndControllerPath}  doesn't exists. Going to make it.`);
            try {
                await LoopbackArchitectureCode.writeCodeToFile(
                    projectPath,
                    controllerPath,
                    componentCode,
                    ComponentCodeTypeEnum.Controller,
                    object
                );
            } catch (error: any) {
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