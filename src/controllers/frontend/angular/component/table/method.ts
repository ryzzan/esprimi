import {
    DialogInterface
} from "../../../../../interfaces/dialog";
import {
    MainInterface
} from "../../../../../interfaces/main";
import {
    TableElementInterface
} from "../../../../../interfaces/table";
import {
    TextTransformation
} from "../../../../../utils/text.transformation";

export class CodeToAngularTableComponentMethod {
    static customMethod = (object: MainInterface): string => {
        let hasAction = '', refreshToken = '';

        if (!object.table)
            return '';

        if (object.table.service?.hasAuthorization) {
            refreshToken = `refreshToken = async () => {
                try {
                    const res: any = await this._${object.table.id}Service.refreshToken();

                    if (res) {
                        sessionStorage.setItem('refreshToken', res?.data.authRefreshToken);
                        sessionStorage.setItem('token', res?.data.authToken);
                    }
                } catch (error: any) {
                    const message = this._errorHandler.apiErrorMessage(error.error.message);
                    this.isLoading = false;
                    this.sendErrorMessage(message);
                    sessionStorage.clear();
                    this.router.navigate(['/']);
                };
            };`
        }

        if (object.table.actions)
            hasAction = `
            ${object.table.id}Submit() {
                this.isLoading = true;
                
                this._${object.table.id}Service
                .find(this.${object.table.id}Form.value)
                .then((res) => {
                    this.isLoading = false;
                })
                .catch((err: any) => {
                    const message = this._errorHandler.apiErrorMessage(err.error.message);
                                        
                    this.isLoading = false;

                    this.sendErrorMessage(message);
                });
            };

            redirectTo = (uri:string) => {
                this.router.navigateByUrl('/main', {skipLocationChange: true})
                .then(() => {
                    this.router.navigate([uri]);
                });
            };
            `;
        const componentCode = `
                            ${CodeToAngularTableComponentMethod.setTableElements(object, object.table.elements)}
                            ${hasAction}
                            set${TextTransformation.pascalfy(object.table.id)}Service = () => {
                                this._${object.table.id}Service.getAll()
                                .then((result: any) => {
                                  this.${object.table.id}DataSource = result?.data.result ? result?.data.result : result?.data;
                                  this.isLoading = false;
                                })
                                .catch(async err => {
                                  if (err.error.logMessage === 'jwt expired') {
                                    await this.refreshToken();
                                    this.set${TextTransformation.pascalfy(object.table.id)}Service();
                                  } else {
                                    const message = this._errorHandler.apiErrorMessage(err.error.message);
                                    this.isLoading = false;
                                    this.sendErrorMessage(message);
                                  };
                                });
                            };
                            ${refreshToken}
                            `;

        return componentCode;
    }

    static setTableElements(object: MainInterface, elements: Array < TableElementInterface > ): string {
        let codeElement = '';
        elements.forEach(element => {
            if (element.row) {
                const menus = element.row.menu;

                menus?.forEach(menu => {
                    if (menu.dialog) {
                        codeElement += CodeToAngularTableComponentMethod.setDialog(object, menu.dialog);
                    }
                });
            }
        });

        return codeElement;
    }

    static setDialog(object: MainInterface, dialog: DialogInterface): string {
        let hasDialogData = '';

        if (dialog.dialogDataInterface) {
            hasDialogData += `,data:
                                ${JSON.stringify(
                                    dialog.dialogDataInterface,
                                )}`;
        }

        const codeDialog = `
                    ${hasDialogData}
                    ${this.setDialogAfterClosed(object, dialog)}`;
        
        return codeDialog;
    }

    static setDialogAfterClosed = (object: MainInterface, dialog: DialogInterface) => {
        let code = '';
        switch (dialog.id) {
            case 'removeConfirmationDialog':
                code += `${dialog.id}OpenDialog = (id: string) => {
                    const ${dialog.id}DialogRef = this._dialog.open(
                        ${TextTransformation.pascalfy(dialog.id)}Component,
                        {
                          data: {
                            id: id,
                          },
                        },
                    );

                    ${dialog.id}DialogRef
                        .afterClosed()
                        .subscribe(async (res: any) => {
                            if(res) {
                                try {
                                    const routeToGo = (this.${object.table?.id}Id !== "") 
                                                        ? this.router.url.split(\`\/\${this.${object.table?.id}Id}\`)[0] 
                                                        : this.router.url;
                                    this.isLoading = true;
                                    await this._${object.table?.id}Service.delete(res.id);
                                    this.redirectTo(routeToGo);
                                    this.isLoading = false;
                                } catch (error: any) {
                                    const message = this._errorHandler.apiErrorMessage(error.error.message);
                                    this.sendErrorMessage(message);
                                }
                            }
                        });
                };`;
                break;
        
            default:
                code += `${dialog.id}OpenDialog = (???) => {
                            const ${dialog.id}DialogRef = this._dialog.open(
                                ${TextTransformation.pascalfy(dialog.id)}Component,{}
                            );

                            ${dialog.id}DialogRef
                                .afterClosed()
                                .subscribe(async (res: any) => {
                                    // TODO
                                });
                        };`;
                break;
        }
        
        return code;
    }
}