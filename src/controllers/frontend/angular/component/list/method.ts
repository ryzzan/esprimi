import { ListInterface } from "../../../../../interfaces/list";
import { MainInterface } from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

export class CodeToAngularListComponentMethod {
  static customMethod = (object: MainInterface): string => {
    if (!object.list) return "";

    const list = object.list;
    const methods = CodeToAngularListComponentMethod.createListMethods(list);            
    const componentCode = `${methods}`;
                              
    return componentCode;
  };

  static createListMethods = (list: ListInterface): string => {
    let methods = "";

    methods += `
    set${TextTransformation.pascalfy(list.id)}Service = (filter: string = '') => {
      this._${list.id}Service.getAll(filter)
      .then((result: any) => {
        this.${list.id}DataSource = result.data.result;
        this.isLoading = false;
      })
      .catch(async err => {
        if (err.error.logMessage === 'jwt expired') {
          await this.refreshToken();
          this.set${TextTransformation.pascalfy(list.id)}Service();
        } else {
          const message = this._errorHandler.apiErrorMessage(err.error.message);
          this.isLoading = false;
          this.sendErrorMessage(message);
        };
      });
    };

    ${list.id}OpenDialog = (filter: string = '') => {
      const ${list.id}DialogRef = this._dialog.open(
        GenericAnalyticReportComponent,
        {
          data: {
            filter: filter,
          },
        },
      );

      ${list.id}DialogRef
        .afterClosed()
        .subscribe(async (res: any) => {
          if(res) {
            try {
              this.isLoading = false;
            } catch (error: any) {
              const message = this._errorHandler
                              .apiErrorMessage(error.error.message);
              this.sendErrorMessage(message);
            }
          }
        });
    };

    refreshToken = async () => {
      try {
          const res: any = await this._${list.id}Service.refreshToken();

          if (res) {
            sessionStorage.setItem('token', res?.data.authToken);
            sessionStorage.setItem('refreshToken', res?.data.authRefreshToken);
          }
      } catch (error: any) {
        const message = this._errorHandler
                          .apiErrorMessage(error.error.message);
        this.isLoading = false;
        this.sendErrorMessage(message);
        sessionStorage.clear();
        this.router.navigate(['/']);
      };
    };
    `;

    return methods;
  }
};