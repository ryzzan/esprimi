import {
    MainInterface
} from "../../../../interfaces/main";
import { TextTransformation } from "../../../../utils/text.transformation";
import { CodeToLoopbackRepositoryProperties } from "./properties/main";

export class CodeToLoopbackRepository {

    customRepositoryPropertyCode = new CodeToLoopbackRepositoryProperties;

    createComponentCode = async (
        modelName: string,
        object: MainInterface
    ): Promise<string> => {
        const repositorySkeletonCode = `
                                import {Getter, inject} from '@loopback/core';
                                import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
                                import {MongodbDataSource} from '../datasources';
                                import {%MODULE_IMPORTS% %pascalfy(${modelName})%, %pascalfy(${modelName})%Relations} from '../models';
                                import {%REPOSITORY_IMPORTS%} from '.';

                                export class %pascalfy(${modelName})%Repository extends DefaultCrudRepository<
                                    %pascalfy(${modelName})%,
                                    typeof %pascalfy(${modelName})%.prototype._id,
                                    %pascalfy(${modelName})%Relations
                                > {
                                    %PROPERTIES%

                                    constructor(
                                        @inject('datasources.mongodb') dataSource: MongodbDataSource,
                                        %GETTERS%
                                    ) {
                                        super(%pascalfy(${modelName})%, dataSource);
                                        %VARIABLES%
                                    }
                                }
                                `;

        let code = repositorySkeletonCode;

        const propertyCode = this.customRepositoryPropertyCode.createProperties(object, TextTransformation.pascalfy(modelName));
        code = code.replace('%MODULE_IMPORTS%', propertyCode.modulesImports);
        code = code.replace('%REPOSITORY_IMPORTS%', propertyCode.repositoriesImports);
        code = code.replace('%PROPERTIES%', propertyCode.properties);
        code = code.replace('%GETTERS%', propertyCode.getters);
        code = code.replace('%VARIABLES%', propertyCode.variables);

        code = TextTransformation.replaceKebabfyFunctionToString(code);
        code = TextTransformation.replacePascalfyFunctionToString(code);

        return code;
    }
}