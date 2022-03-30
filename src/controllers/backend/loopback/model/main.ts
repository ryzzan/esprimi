import {
    MainInterface
} from "../../../../interfaces/main";
import { TextTransformation } from "../../../../utils/text.transformation";
import { CodeToLoopbackModelProperties } from "./properties/main";

export class CodeToLoopbackModel {
    customModelPropertyCode = new CodeToLoopbackModelProperties;

    createComponentCode = async (
        modelName: string,
        object: MainInterface
    ): Promise<string> => {
        const modelSkeletonCode = `
                                    import {model, property} from '@loopback/repository';
                                    import {Default} from '.';

                                    @model()
                                    export class %pascalfy(${modelName})% extends Default {

                                        @property({
                                            type: 'string',
                                            id: true,
                                            generated: true,
                                        })
                                        _id?: string;

                                        %PROPERTIES%

                                        constructor(data?: Partial<%pascalfy(${modelName})%>) {
                                            super(data);
                                        }
                                    }
                                    
                                    export interface %pascalfy(${modelName})%Relations {
                                        
                                    }
                                    
                                    export type %pascalfy(${modelName})%WithRelations = %pascalfy(${modelName})% & %pascalfy(${modelName})%Relations;
                                    `;

        let code = modelSkeletonCode;

        const propertyCode = this.customModelPropertyCode.createProperties(object);
        code = code.replace('%PROPERTIES%', propertyCode);

        code = TextTransformation.replaceKebabfyFunctionToString(code);
        code = TextTransformation.replacePascalfyFunctionToString(code);

        return code;
    }
}