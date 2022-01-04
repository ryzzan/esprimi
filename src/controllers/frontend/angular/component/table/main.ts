import {
    MainInterface
} from "../../../../../interfaces/main";
import { CodeToAngularTableComponentConstructorArg } from "./constructor-arg";
import { CodeToAngularTableComponentConstructorParam } from "./constructor-param";
import { CodeToAngularTableComponentImport } from "./import";
import { CodeToAngularTableComponentInterface } from "./interface";
import { CodeToAngularTableComponentMethod } from "./method";
import { CodeToAngularTableComponentProperty } from "./property";

export class CodeToAngularTableComponent {
    createProperty = (object: MainInterface): string => {
        return CodeToAngularTableComponentProperty.customProperties(object);
    }

    createConstructorParams = (object: MainInterface): string => {
        return CodeToAngularTableComponentConstructorParam.customConstructorParam(object);
    }

    createConstructorArg = (object: MainInterface): string => {
        return CodeToAngularTableComponentConstructorArg.customConstructorArg(object);
    }

    createImport = (object: MainInterface): string => {
        return CodeToAngularTableComponentImport.customImports(object);
    }

    createMethod = (object: MainInterface): string => {
        return CodeToAngularTableComponentMethod.customMethod(object);
    }

    createInterface = (object: MainInterface): string => {
        return CodeToAngularTableComponentInterface.customInterface(object);
    }
}