import { RequestTypeEnum } from "../../../../../enums/request";
import { MainInterface } from "../../../../../interfaces/main";
import { RowMenuElementInterface, TableElementInterface } from "../../../../../interfaces/table";
import { TextTransformation } from "../../../../../utils/text.transformation";

export class CodeToAngularTableTemplateRowMenu {
    createRowMenu = (object: MainInterface): string => {
        if (!object.table) return '';
        const array = object.table.elements;
        const menuArray = [];
        array.forEach((element: TableElementInterface) => {
            if (!element.row.menu) return '';

            menuArray.push(element.row.menu);
        });

        const codeRowMenu = `
                            <mat-menu #${object.table.id}Menu="matMenu">
                                
                            </mat-menu>
                            `;
        return codeRowMenu;
    }

    createRowMenuItems = (rowMenuElements: Array<RowMenuElementInterface>) => {
        rowMenuElements.forEach((element: TableElementInterface) => {
            let menuButtonAction = '';
            if (element.row.menu) {
              element.row.menu?.forEach(menuItem => {
                menuButtonAction = '';
                if (
                  menuItem.action.type &&
                  menuItem.action.type == RequestTypeEnum.Link
                )
                  menuButtonAction = `[routerLink]="['${menuItem.action.url}']"`;
                if (menuItem.dialog && menuItem.dialog?.templateFolder) {
                  const dialogTemplateAsPropertyName =
                    TextTransformation.setIdToPropertyName(
                      menuItem.dialog?.templateFolder,
                    );
                  menuButtonAction = `(click)="${dialogTemplateAsPropertyName}OpenDialog()"`;
                }
      
                rowMenu += `<button mat-menu-item ${menuButtonAction}>`;
                rowMenu += menuItem.icon
                  ? `<mat-icon>${menuItem.icon}</mat-icon>`
                  : '';
                rowMenu += `<span>${menuItem.label}</span>`;
                rowMenu += `</button>`;
              });
            }
          });
    }
}