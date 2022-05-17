import {
    MainInterface
} from "../../../../../interfaces/main";

import { CodeToLoopbackRepositoryProperty, IRepositoryProperty } from "./property";

export class CodeToLoopbackRepositoryProperties {
    createProperties = (object: MainInterface, modelName: string): IRepositoryProperty => {
        console.info(`Dealing with properties in ${object.form?.title}`);
        return CodeToLoopbackRepositoryProperty.customProperties(object, modelName);
    }
}