import { MainInterface } from "../../../../../interfaces/main";
import { TableElementInterface } from "../../../../../interfaces/table";
import { CodeToAngularTableTemplateRowMenu } from "./row-menu";

export class CodeToAngularTableTemplateColumnsAndRows extends CodeToAngularTableTemplateRowMenu {
    createColumnsAndRows = (object: MainInterface): string => {
        if (!object.table) return '';

        let codeTable = '';

        object.table.elements.forEach((element: TableElementInterface) => {
            const columnContent = element.row.menu 
                                ?   `<button mat-icon-button class="icon" aria-label="%pascalfy${object.table?.id}%" [matMenuTriggerFor]="${object.table?.id}Menu"  [matMenuTriggerData]="{element: element}">
                                        <mat-icon>${element.row.icon}</mat-icon>
                                    </button>` 
                                : `{{element.${element.row.field}}}`;;
            
            codeTable += `<ng-container matColumnDef="${element.row.field}">
                            <th mat-header-cell *matHeaderCellDef> ${element.column.label} </th>
                            <td mat-cell *matCellDef="let element"> ${columnContent} </td>
                        </ng-container>`;
        })

        return codeTable;
    }
}