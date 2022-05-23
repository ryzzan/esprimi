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
                                import {BelongsToAccessor, DefaultCrudRepository, HasManyThroughRepositoryFactory, repository, Entity, model, property} from '@loopback/repository';
                                import {MongodbDataSource} from '../datasources';
                                import {%MODULE_IMPORTS%} from '../models';
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

                                %RELATED_MODELS%
                                `;

        let code = repositorySkeletonCode;

        const propertyCode = this.customRepositoryPropertyCode.createProperties(object, TextTransformation.pascalfy(modelName));
        code = code.replace('%MODULE_IMPORTS%', [...new Set(`${propertyCode.modulesImports} ${TextTransformation.pascalfy(modelName)}, ${TextTransformation.pascalfy(modelName)}Relations`.split(',').map(el => el.trim()))].join(','));
        code = code.replace('%REPOSITORY_IMPORTS%', [...new Set(`${propertyCode.repositoriesImports}`.split(',').map(el => el.trim()))].join(','));
        code = code.replace('%PROPERTIES%', propertyCode.properties);
        code = code.replace('%GETTERS%', propertyCode.getters);
        code = code.replace('%VARIABLES%', propertyCode.variables);
        code = code.replace('%RELATED_MODELS%', propertyCode.relatedModelsAndRepositories);

        code = TextTransformation.replaceKebabfyFunctionToString(code);
        code = TextTransformation.replacePascalfyFunctionToString(code);

        return code;
    }
}