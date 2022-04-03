import {
    MainInterface
} from "../../../../../interfaces/main";

import { CodeToLoopbackModelProperty } from "./property";

export class CodeToLoopbackModelProperties {
    createProperties = (object: MainInterface): string => {
        console.info(`Dealing with properties in ${object.form?.title}`);
        return CodeToLoopbackModelProperty.customProperties(object);
    }
}