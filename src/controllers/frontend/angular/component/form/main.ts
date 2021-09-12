import {
    MainInterface
} from "../../../../../interfaces/main";
import { CodeToAngularFormComponentConstructorArg } from "./constructor-arg";
import { CodeToAngularFormComponentConstructorParam } from "./constructor-param";

import {
    CodeToAngularFormComponentImport
} from "./import";
import { CodeToAngularFormComponentMethod } from "./method";
import { CodeToAngularFormComponentProperty } from "./property";

export class CodeToAngularFormComponent {
    createProperty = (object: MainInterface): string => {
        return CodeToAngularFormComponentProperty.customProperties(object);
    }

    createConstructorParams = (object: MainInterface): string => {
        return CodeToAngularFormComponentConstructorParam.customConstructorParam(object);
    }

    createConstructorArg = (object: MainInterface): string => {
        return CodeToAngularFormComponentConstructorArg.customConstructorArg(object);
    }

    createImport = (object: MainInterface): string => {
        return CodeToAngularFormComponentImport.customImports(object);
    }

    createMethod = (object: MainInterface): string => {
        return CodeToAngularFormComponentMethod.customMethod(object);
    }
}