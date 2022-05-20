import {
    MainInterface
} from "../../../../../interfaces/main";

import { CodeToLoopbackControllerProperty, IControllerRelatedProperties } from "./property";

export class CodeToLoopbackControllerProperties {
    createProperties = (object: MainInterface, modelName: string): IControllerRelatedProperties => {
        console.info(`Dealing with properties in ${object.form?.title}`);
        return CodeToLoopbackControllerProperty.customProperties(object, modelName);
    }
}