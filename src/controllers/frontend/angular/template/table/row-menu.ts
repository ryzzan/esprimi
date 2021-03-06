import {
  RequestTypeEnum
} from "../../../../../enums/request";
import {
  MainInterface
} from "../../../../../interfaces/main";
import {
  RowMenuElementInterface,
  TableElementInterface
} from "../../../../../interfaces/table";
import {
  TextTransformation
} from "../../../../../utils/text.transformation";

export class CodeToAngularTableTemplateRowMenu {
  
  static createRowMenu = (object: MainInterface): string => {
    if (!object.table) return '';
    const array = object.table.elements;
    const menuArray: Array<RowMenuElementInterface> = [];
    array.forEach((element: TableElementInterface) => {
      if (!element.row.menu) return '';

      element.row.menu.forEach(menuElement => {
        menuArray.push(menuElement);
      });
    });

    const codeRowMenu = `
                        <mat-menu #${object.table.id}Menu="matMenu">
                          ${CodeToAngularTableTemplateRowMenu.createRowMenuItems(menuArray)}
                        </mat-menu>
                        `;
    return codeRowMenu;
  }

  static createRowMenuItems = (rowMenuElements: Array<RowMenuElementInterface> ) => {
    let rowMenu = '';

    rowMenuElements.forEach((element: RowMenuElementInterface) => {
      let menuButtonAction = '';
      let menuParam = '';
          if (
            element.action.type &&
            element.action.type == RequestTypeEnum.Link
          ) {
            menuButtonAction = `[routerLink]="['${element.action.url}'${element.action.param ? ', '+element.action.param : ''}]"`;
            if (element.action.param) menuParam = `<ng-template matMenuContent let-${element.action.param}="element.${element.action.param}">`;
          }
          
          if (element.dialog && element.dialog?.templateFolder) {
            const dialogTemplateAsPropertyName =
              TextTransformation.setIdToPropertyName(
                element.dialog?.templateFolder,
              );
            menuButtonAction = `(click)="${dialogTemplateAsPropertyName}OpenDialog()"`;
          }

          rowMenu += `${menuParam}<button mat-menu-item ${menuButtonAction}>
                        ${element.icon?`<mat-icon>${element.icon}</mat-icon>`:''}
                        <span>${element.label}</span>
                      </button>`;

          if (menuParam !== '') rowMenu += `</ng-template>`;
    });

    return rowMenu;
  }
}