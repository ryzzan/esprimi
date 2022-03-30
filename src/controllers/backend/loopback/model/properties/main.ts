import {
    MainInterface
} from "../../../../../interfaces/main";

import { CodeToLoopbackModelProperty } from "./property";

export class CodeToLoopbackModelProperties {
    createProperties = (object: MainInterface): string => {
        console.info(`Dealing with properties in ${object.model?.name}`);
        return CodeToLoopbackModelProperty.customProperties(object);
    }
}