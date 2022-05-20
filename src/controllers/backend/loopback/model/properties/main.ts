import {
    MainInterface
} from "../../../../../interfaces/main";

import { CodeToLoopbackModelProperty, IModelProperty } from "./property";

export class CodeToLoopbackModelProperties {
    createProperties = (object: MainInterface, modelName: string): IModelProperty => {
        console.info(`Dealing with properties in ${object.form?.title}`);
        return CodeToLoopbackModelProperty.customProperties(object, modelName);
    }
}