import {
    MainInterface
} from "../../../../../interfaces/main";

import { CodeToLoopbackControllerProperty } from "./property";

export class CodeToLoopbackControllerProperties {
    createProperties = (object: MainInterface): string => {
        console.info(`Dealing with properties in ${object.form?.title}`);
        return CodeToLoopbackControllerProperty.customProperties(object);
    }
}