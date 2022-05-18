import { ChartInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

export class CodeToAngularChartComponentMethod {
  static customMethod = (object: MainInterface): string => {
    if (!object.chart) return "";

    const chart = object.chart;
    const methods = CodeToAngularChartComponentMethod.createChartMethods(chart);            
    const componentCode = `${methods}`;
                              
    return componentCode;
  };

  static createChartMethods = (chart: ChartInterface): string => {
    let methods = "";

    if (chart.line) {
      methods += `
      ${chart.id}LineChartClicked = ({
        event,
        active,
      }: {
        event?: ChartEvent;
        active?: any;
      }): void => {
        this.${chart.id}OpenDialog(this.${chart.id}DataSource.identifiers[active[0].index]);
      };

      set${TextTransformation.pascalfy(chart.id)}Service = (filter: string = '') => {
        this._${chart.id}Service.getAll(filter)
        .then((result: any) => {
          this.${chart.id}DataSource = result.data.result;          
          this.isLoading = false;
        })
        .catch(async err => {
          if (err.error.logMessage === 'jwt expired') {
            await this.refreshToken();
            this.set${TextTransformation.pascalfy(chart.id)}Service();
          } else {
            const message = this._errorHandler.apiErrorMessage(err.error.message);
            this.isLoading = false;
            this.sendErrorMessage(message);
          };
        });
      };
      `;
    }

    if (chart.bar) {
      methods += `
      ${chart.id}BarChartClicked = ({
        event,
        active,
      }: {
        event?: ChartEvent;
        active?: any;
      }): void => {
        this.${chart.id}OpenDialog(this.${chart.id}DataSource.identifiers[active[0].index]);
      };
      `;
      
      if (chart.bar.datasets.length < 1) {
        methods += `
        set${TextTransformation.pascalfy(chart.id)}Service = (filter: string = '') => {
          this._${chart.id}Service.getAll(filter)
          .then((result: any) => {
            if (result) {
              if (result.data) {
                if (result.data.result) {
                  this.${chart.id}DataSource = result.data.result;
                }
  
                this.${chart.id}DataSource = result.data;
              }
  
              this.${chart.id}DataSource = result;
            }

            const message = this._errorHandler.apiErrorMessage("Sem formato esperado de resultado");
            this.sendErrorMessage(message);
            this.isLoading = false;
            
            this.${chart.id}BarChartData.datasets = this.${chart.id}DataSource.datasets;
            this.${chart.id}BarChartData.labels = this.${chart.id}DataSource.labels;
          })
          .catch(async err => {
            if (err.error.logMessage === 'jwt expired') {
              await this.refreshToken();
              this.set${TextTransformation.pascalfy(chart.id)}Service();
            } else {
              const message = this._errorHandler.apiErrorMessage(err.error.message);
              this.isLoading = false;
              this.sendErrorMessage(message);
            };
          });
        };
        `;
      }
    }

    if (chart.pie) {
      methods += `
      ${chart.id}PieChartClicked = ({
        event,
        active,
      }: {
        event?: ChartEvent;
        active?: any;
      }): void => {
        this.${chart.id}OpenDialog(this.${chart.id}DataSource.identifiers[active[0].index]);
      };
      `;
      
      if (chart.pie.datasets.length < 1) {
        methods += `
        set${TextTransformation.pascalfy(chart.id)}Service = (filter: string = '') => {
          this._${chart.id}Service.getAll(filter)
          .then((result: any) => {
            if (result) {
              if (result.data) {
                if (result.data.result) {
                  this.${chart.id}DataSource = result.data.result;
                }
  
                this.${chart.id}DataSource = result.data;
              }
  
              this.${chart.id}DataSource = result;
            }

            const message = this._errorHandler.apiErrorMessage("Sem formato esperado de resultado");
            this.sendErrorMessage(message);  
            this.isLoading = false;
            
            this.${chart.id}PieChartData.datasets = this.${chart.id}DataSource.datasets;
            this.${chart.id}PieChartData.labels = this.${chart.id}DataSource.labels;
          })
          .catch(async err => {
            if (err.error.logMessage === 'jwt expired') {
              await this.refreshToken();
              this.set${TextTransformation.pascalfy(chart.id)}Service();
            } else {
              const message = this._errorHandler.apiErrorMessage(err.error.message);
              this.isLoading = false;
              this.sendErrorMessage(message);
            };
          });
        };
        `;
      }
    }

    methods += `
    ${chart.id}OpenDialog = (filter: string = '') => {
      const ${chart.id}DialogRef = this._dialog.open(
        GenericAnalyticReportComponent,
        {
          data: {
            filter: filter,
          },
        },
      );

      ${chart.id}DialogRef
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
          const res: any = await this._${chart.id}Service.refreshToken();

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