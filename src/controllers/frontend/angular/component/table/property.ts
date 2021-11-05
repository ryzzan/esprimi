import {
    MainInterface
} from "../../../../../interfaces/main";
import { TableElementInterface } from "../../../../../interfaces/table";

export class CodeToAngularTableComponentProperty {
    static customProperties = (object: MainInterface): string => {
        let hasAction = '';
        if (object.table) {
            if (object.table.actions) {
                hasAction = `
                            ${object.table.id}Form: FormGroup;
                            `;
            }

            const componentCode = `
                                ${hasAction}
                                ${CodeToAngularTableComponentProperty.setTableObject(object)}
                                ${object.table.id}DataSource: any = []; 
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
}