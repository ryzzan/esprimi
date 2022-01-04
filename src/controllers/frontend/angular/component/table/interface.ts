import { FormElementInterface } from "../../../../../interfaces/form";
import { MainInterface } from "../../../../../interfaces/main";

export class CodeToAngularTableComponentInterface {
    static customInterface = (objectToCode: MainInterface): string => {
        let code = '';

        if(objectToCode.table?.actions) {
            code += CodeToAngularTableComponentInterface.createInterface(objectToCode.table.actions.elements);
        }
        
        return code;
    }

    static createInterface = (
        elements: Array<FormElementInterface>,
        hasSelectObjectInterface = false
    ): string => {
        let code = '';

        elements.forEach((object: any) => {
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    const element = object[key];

                    if (key === 'tabs') {
                        const tabs = object[key];
                        if (tabs) {
                            tabs.forEach((tab: any) => {
                                code += CodeToAngularTableComponentInterface.createInterface(tab.elements, hasSelectObjectInterface);
                            });
                        }
                    }

                    if (key === 'array') {
                        const array = object[key];

                        code += CodeToAngularTableComponentInterface.createInterface(array.elements, hasSelectObjectInterface);
                    }

                    if (key === 'select') {
                        if (!hasSelectObjectInterface) {
                            code += `export interface SelectObjectInterface {
                                        label?: string;
                                        value?: string;
                                    }`;

                            hasSelectObjectInterface = true;
                        }
                    }
                }
            }
        });
        
        return code;
    }
}