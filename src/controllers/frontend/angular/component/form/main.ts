import {
    MainInterface
} from "../../../../../interfaces/main";
import { CodeToAngularFormComponentConstructorArg } from "./constructor-arg";
import { CodeToAngularFormComponentConstructorParam } from "./constructor-param";

import {
    CodeToAngularFormComponentImport
} from "./import";
import { CodeToAngularFormComponentInterface } from "./interface";
import { CodeToAngularFormComponentMethod } from "./method";
import { CodeToAngularFormComponentProperty } from "./property";

export class CodeToAngularFormComponent {
    createProperty = (object: MainInterface): string => {
        console.info(`Dealing with properties in ${object.form?.title}`);
        return CodeToAngularFormComponentProperty.customProperties(object);
    }

    createConstructorParams = (object: MainInterface): string => {
        console.info(`Dealing with constructor params in ${object.form?.title}`);
        return CodeToAngularFormComponentConstructorParam.customConstructorParam(object);
    }

    createConstructorArg = (object: MainInterface): string => {
        console.info(`Dealing with constructor args in ${object.form?.title}`);
        return CodeToAngularFormComponentConstructorArg.customConstructorArg(object);
    }

    createImport = (object: MainInterface): string => {
        console.info(`Dealing with imports in ${object.form?.title}`);
        return CodeToAngularFormComponentImport.customImports(object);
    }

    createMethod = (object: MainInterface): string => {
        console.info(`Dealing with methods in ${object.form?.title}`);
        return CodeToAngularFormComponentMethod.customMethod(object);
    }

    createInterface = (object: MainInterface): string => {
        console.info(`Creating interface in ${object.form?.title}`);
        return CodeToAngularFormComponentInterface.customInterface(object);
    }
}