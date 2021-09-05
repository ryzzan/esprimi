import {
    MainInterface
} from "../../../../../interfaces/main";

import {
    CodeToAngularTableComponentImport
} from "./import";

export class CodeToAngularTableComponent extends CodeToAngularTableComponentImport {
    createProperty = (object: MainInterface): string => {
        return this.customProperties(object);
    }

    createConstructorParams = (object: MainInterface): string => {
        return this.customConstructorParam(object);
    }

    createConstructorArg = (object: MainInterface): string => {
        return this.customConstructorArg(object);
    }

    createImport = (object: MainInterface): string => {
        return this.customImports(object);
    }

    createMethod = (object: MainInterface): string => {
        return this.customMethod(object);
    }
}