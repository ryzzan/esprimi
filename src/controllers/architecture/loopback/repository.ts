import * as fs from 'fs';
import { ComponentCodeTypeEnum } from '../../../enums/architecture';
import { MainInterface } from '../../../interfaces/main';
import { LoopbackArchitectureCode } from './code';

export class LoopbackArchitectureRepository {
    static createArchitectureRepository = async (
        componentCode: string | undefined,
        object: MainInterface
    ) => {
        let repositoryPath = object.model?.id!;

        const projectPath = `${object.projectPath}-api`;
        const projectAndRepositoryPath = `${projectPath}/src/repositories/`;

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
        } catch (error) {
            console.info(`Folder ${projectAndRepositoryPath}  doesn't exists. Going to make it.`);
            try {
                await LoopbackArchitectureCode.writeCodeToFile(
                    projectPath,
                    repositoryPath,
                    componentCode,
                    ComponentCodeTypeEnum.Repository,
                    object
                );
            } catch (error) {
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