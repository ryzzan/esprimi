import {
  RequestTypeEnum
} from "../../../../../enums/request";
import {
  MainInterface
} from "../../../../../interfaces/main";
import {
  ChartMenuInterface,
} from "../../../../../interfaces/chart";
import {
  TextTransformation
} from "../../../../../utils/text.transformation";

export class CodeToAngularChartTemplateMenu {
  
  static createChartMenu = (object: MainInterface): string => {
    if (!object.chart) return "";
    
    if (!object.chart.menu) return "";

    const menuArray: Array<ChartMenuInterface> = [];

    object.chart.menu.forEach(menuElement => {
      menuArray.push(menuElement);
    });
    
    const codeMenu = `
    <mat-menu #${object.chart.id}Menu="matMenu">
      ${CodeToAngularChartTemplateMenu.createChartMenuItems(menuArray)}
    </mat-menu>
    `;
    
    return codeMenu;
  }

  static createChartMenuItems = (rowMenuElements: Array<ChartMenuInterface> ) => {
    let rowMenu = "", hasMenuParam = false, menuButtonAction = "";
    
    for (let i = 0; i < rowMenuElements.length; i++) {
      const element = rowMenuElements[i];
      let count = 0, menuParam = "";
      
      if (
        element.action.type &&
        element.action.type == RequestTypeEnum.Link
      ) {
        menuButtonAction = `[routerLink]="["${element.action.url}"${element.action.param ? ", "+element.action.param : ""}]"`;
        
        if (element.action.param) {
          hasMenuParam = true;
          if(count === 0) {
            menuParam = `<ng-template matMenuContent let-${element.action.param}="element.${element.action.param}">`;            
          }

          count++;
        }
      }
      
      if (element.dialog && element.dialog.templateFolder) {
        const dialogTemplateAsPropertyName =
          TextTransformation.setIdToPropertyName(
            element.dialog?.templateFolder,
          );
        menuButtonAction = `(click)="${dialogTemplateAsPropertyName}OpenDialog(${element.action.param})"`;
      }

      rowMenu += `${menuParam}<button mat-menu-item ${menuButtonAction}>
                    ${element.icon?`<mat-icon>${element.icon}</mat-icon>`:""}
                    <span>${element.label}</span>
                  </button>`;
    }

    if (hasMenuParam) {
      rowMenu += `</ng-template>`;
    }

    return rowMenu;
  }
}