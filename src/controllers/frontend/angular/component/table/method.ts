import { DialogInterface } from "../../../../../interfaces/dialog";
import {
    MainInterface
} from "../../../../../interfaces/main";
import { TableElementInterface } from "../../../../../interfaces/table";
import { TextTransformation } from "../../../../../utils/text.transformation";

export class CodeToAngularTableComponentMethod {
    static customMethod = (object: MainInterface): string => {
        let hasAction = '';
        
        if (!object.table)
            return '';

        if (object.table.actions)
            hasAction = `
            ${object.table.id}Submit() {
                this._${object.table.id}Service
                .find(this.${object.table.id}Form.value)
                .then((res) => {
                    this.isLoading = false;
                })
                .catch((err) => {
                    this.isLoading = false;
                    const message = this._errorHandler.apiErrorMessage(err.error.error.message);
                    this._snackbar.open(message, undefined, {
                        duration: 4 * 1000,
                    });
                })
            }
            `;
        const componentCode = `
                            ${CodeToAngularTableComponentMethod.setTableElements(object.table.elements)}
                            ${hasAction}
                            `;

        return componentCode;
    }

    static setTableElements(elements: Array<TableElementInterface>): string {
        let codeElement = '';
        elements.forEach(object => {
          if (object.row) {
            const menus = object.row.menu;
    
            menus?.forEach(menu => {
              if (menu.dialog) {
                codeElement += CodeToAngularTableComponentMethod.setDialog(menu.dialog);
              }
            });
          }
        });
    
        return codeElement;
      }
    
      static setDialog(dialog: DialogInterface): string {
        let hasDialogData = '';
        
        if (dialog.dialogDataInterface) {
            hasDialogData += `,data:
                                ${JSON.stringify(
                                    dialog.dialogDataInterface,
                                )}`;
        }
        
        const codeDialog = `
                    ${hasDialogData}
                    ${dialog.id}OpenDialog = () => {
                        const ${dialog.id}DialogRef = this._dialog.open(
                            ${TextTransformation.pascalfy(dialog.id)}Component,{}
                        )
                    };`;
    
        return codeDialog;
      }
}