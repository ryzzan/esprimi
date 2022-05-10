import * as fs from 'fs';
import { ComponentCodeTypeEnum } from '../../../enums/architecture';
import { MainInterface } from '../../../interfaces/main';
import { TextTransformation } from '../../../utils/text.transformation';
import { LoopbackArchitectureCode } from './code';

export class LoopbackArchitectureRepository {
    static createArchitectureRepository = async (
        componentCode: string | undefined,
        object: MainInterface
    ) => {
        let repositoryPath = TextTransformation.kebabfy(object.form?.id.replace("Form", '')!);

        const projectPath = `${object.projectPath}-api`;
        const projectAndRepositoryPath = `${projectPath}/src/repositories/`;

        componentCode += `/* moduleName->${object.form?.title}<- */`

        try {
            fs.readdirSync(projectAndRepositoryPath);
            console.info(`Folder ${projectAndRepositoryPath} already exists.`);
            await LoopbackArchitectureCode.writeCodeToFile(
                projectPath,
                repositoryPath,
                componentCode,
                ComponentCodeTypeEnum.Repository,
                object
            );
        } catch (error: any) {
            console.info(`Folder ${projectAndRepositoryPath}  doesn't exists. Going to make it.`);
            try {
                await LoopbackArchitectureCode.writeCodeToFile(
                    projectPath,
                    repositoryPath,
                    componentCode,
                    ComponentCodeTypeEnum.Repository,
                    object
                );
            } catch (error: any) {
                await LoopbackArchitectureCode.writeCodeToFile(
                    projectPath,
                    repositoryPath,
                    componentCode,
                    ComponentCodeTypeEnum.Repository,
                    object
                );
            }
        }
    }
}