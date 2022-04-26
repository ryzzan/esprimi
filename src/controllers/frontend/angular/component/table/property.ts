import { FormElementInterface } from "../../../../../interfaces/form";
import {
    MainInterface
} from "../../../../../interfaces/main";
import { TableElementInterface } from "../../../../../interfaces/table";

export class CodeToAngularTableComponentProperty {
    static customProperties = (object: MainInterface): string => {
        let hasAction = '';
        if (object.table) {
            if (object.table.actions) {
                const properties = CodeToAngularTableComponentProperty.createTableProperties(object.table.actions.elements);
                
                hasAction = `
                            ${properties}
                            ${object.table.id}Id: string = '';
                            ${object.table.id}Form: FormGroup;
                            `;
            }

            const componentCode = `
                                ${hasAction}
                                ${CodeToAngularTableComponentProperty.setTableObject(object)}
                                ${object.table.id}DataSource: any = [];
                                ${object.table.id}SearchForm: FormGroup;
                                isLoading = true;
                                `;

            return componentCode;
        }

        return '';
    }

    static setTableObject(object: MainInterface): string {
        let codeTableObject = '';
    
        codeTableObject += `${object.table?.id}DisplayedColumns: string[] = [`;
        object.table?.elements.forEach((element: TableElementInterface) => {
          codeTableObject += `'${element.row.field}',`;
        });
        codeTableObject += `];`;
    
        return codeTableObject;
    }

    static createTableProperties = (elements: Array<FormElementInterface>): string => {
        let properties = '';

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            if (element.tabs) {
                element.tabs.forEach(elementTab => {
                    properties += CodeToAngularTableComponentProperty.createTableProperties(elementTab.elements);
                })
            }

            if (element.array) {
                properties += CodeToAngularTableComponentProperty.createTableProperties(element.array.elements);
            }

            if (element.select) {
                if (element.select.optionsObject) {                        
                    properties += `${element.select.name}SelectObject = ${JSON.stringify(element.select.optionsObject)};`;
                }

                if (element.select.optionsApi) {
                    properties += `${element.select.name}SelectObject: Array<SelectObjectInterface> = [];`;
                }
            }            
        }

        return properties;
    }
}