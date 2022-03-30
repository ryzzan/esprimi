import {
    MainInterface
} from "../../../../interfaces/main";
import { TextTransformation } from "../../../../utils/text.transformation";

export class CodeToLoopbackRepository {

    createComponentCode = async (
        modelName: string,
        object: MainInterface
    ): Promise<string> => {
        const repositorySkeletonCode = `
                                import {inject} from '@loopback/core';
                                import {DefaultCrudRepository} from '@loopback/repository';
                                import {MongodbDataSource} from '../datasources';
                                import {%pascalfy(${modelName})%, %pascalfy(${modelName})%Relations} from '../models';

                                export class %pascalfy(${modelName})%Repository extends DefaultCrudRepository<
                                    %pascalfy(${modelName})%,
                                    typeof %pascalfy(${modelName})%.prototype._id,
                                    %pascalfy(${modelName})%Relations
                                > {
                                    constructor(
                                        @inject('datasources.mongodb') dataSource: MongodbDataSource,
                                    ) {
                                        super(%pascalfy(${modelName})%, dataSource);
                                    }
                                }
                                `;

        let code = repositorySkeletonCode;

        code = TextTransformation.replaceKebabfyFunctionToString(code);
        code = TextTransformation.replacePascalfyFunctionToString(code);

        return code;
    }
}