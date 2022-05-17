import {
    MainInterface
} from "../../../../../interfaces/main";
import { CodeToAngularListComponentConstructorArg } from "./constructor-arg";
import { CodeToAngularListComponentConstructorParam } from "./constructor-param";
import { CodeToAngularListComponentImport } from "./import";
import { CodeToAngularListComponentMethod } from "./method";
import { CodeToAngularListComponentProperty } from "./property";

export class CodeToAngularListComponent {
    createProperty = (object: MainInterface): string => {
        return CodeToAngularListComponentProperty.customProperties(object);
    }

    createConstructorParams = (object: MainInterface): string => {
        return CodeToAngularListComponentConstructorParam.customConstructorParam(object);
    }

    createConstructorArg = (object: MainInterface): string => {
        return CodeToAngularListComponentConstructorArg.customConstructorArg(object);
    }

    createImport = (object: MainInterface): string => {
        return CodeToAngularListComponentImport.customImports(object);
    }

    createMethod = (object: MainInterface): string => {
        return CodeToAngularListComponentMethod.customMethod(object);
    }
}