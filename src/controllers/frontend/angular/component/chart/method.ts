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
        this.chartFilterObject = this.${chart.id}DataSource.identifiers[active[0].index];
        this.chartFilter = "";
        for (const key in this.chartFilterObject) {
          if (Object.prototype.hasOwnProperty.call(this.chartFilterObject, key)) {
            const element = this.chartFilterObject[key];
            this.chartFilter += \`&\${key}=\${element}\`
          }
        }
        
        this.${chart.id}OpenDialog();
      };

      set${TextTransformation.pascalfy(chart.id)}Service = (filter: string = '') => {
        this.isLoading = true;
        this._${chart.id}Service.getAll(filter)
        .then((result: any) => {
          if (result.datasets) {
            result.datasets.map((object: any, index: number) => {
              for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                  const element = object[key];
                  
                  object.backgroundColor = this.${chart.id}Background[index];
                  object.hoverBackgroundColor = this.${chart.id}Background[index];
                }
              }
  
              result.datasets.push(object);
            });
  
            this.${chart.id}DataSource = result;
          } else {
            this.${chart.id}DataSource = [];
          }
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

    if (chart.bar) {
      methods += `
      ${chart.id}BarChartClicked = ({
        event,
        active,
      }: {
        event?: ChartEvent;
        active?: any;
      }): void => {
        this.chartFilterObject = this.${chart.id}DataSource.identifiers[active[0].index];
        this.chartFilter = "";
        for (const key in this.chartFilterObject) {
          if (Object.prototype.hasOwnProperty.call(this.chartFilterObject, key)) {
            const element = this.chartFilterObject[key];
            this.chartFilter += \`&\${key}=\${element}\`
          }
        }
        
        this.${chart.id}OpenDialog();
      };
      `;
      
      if (chart.bar.datasets.length < 1) {
        methods += `
        set${TextTransformation.pascalfy(chart.id)}Service = (filter: string = '') => {
          this.isLoading = true;
          this._${chart.id}Service.getAll(filter)
          .then((result: any) => {
            if (result.datasets) {
              result.datasets.map((object: any, index: number) => {
                for (const key in object) {
                  if (Object.prototype.hasOwnProperty.call(object, key)) {
                    const element = object[key];
                    
                    object.backgroundColor = this.${chart.id}Background[index];
                    object.hoverBackgroundColor = this.${chart.id}Background[index];
                  }
                }
    
                result.datasets.push(object);
              });
    
              this.${chart.id}DataSource = result;
            } else {
              this.${chart.id}DataSource = [];
            }
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
        this.chartFilterObject = this.${chart.id}DataSource.identifiers[active[0].index];
        this.chartFilter = "";
        for (const key in this.chartFilterObject) {
          if (Object.prototype.hasOwnProperty.call(this.chartFilterObject, key)) {
            const element = this.chartFilterObject[key];
            this.chartFilter += \`&\${key}=\${element}\`
          }
        }
        
        this.${chart.id}OpenDialog();
      };
      `;
      
      if (chart.pie.datasets.length < 1) {
        methods += `
        set${TextTransformation.pascalfy(chart.id)}Service = (filter: string = '') => {
          this.isLoading = true;
          this._${chart.id}Service.getAll(filter)
          .then((result: any) => {
            if (result.datasets) {
              result.datasets.map((object: any, index: number) => {
                for (const key in object) {
                  if (Object.prototype.hasOwnProperty.call(object, key)) {
                    const element = object[key];
                    
                    object.backgroundColor = this.${chart.id}Background[index];
                    object.hoverBackgroundColor = this.${chart.id}Background[index];
                    object.hoverBorderColor = this.${chart.id}Background[index];
                  }
                }
    
                result.datasets.push(object);
              });
    
              this.${chart.id}DataSource = result;
            } else {
              this.${chart.id}DataSource = [];
            }
            
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
      const mixedFilter = \`\${this.mainFilter}\${this.chartFilter}\`;
      this._${chart.id}Service.getDetails(mixedFilter)
      .then(res => {
        const ${chart.id}DialogRef = this._dialog.open(
          GenericAnalyticReportComponent,
          { data: {
            datasource: res, 
            filter: this.chartFilterObject,
            context: "Definir contexto"
          } }
        );
        ${chart.id}DialogRef
        .afterClosed()
        .subscribe(async (res: any) => {
          if (res) {
            try {
              this.isLoading = false;
            } catch (error: any) {
              const message = this._errorHandler.apiErrorMessage(
                error.error.message
              );
              this.sendErrorMessage(message);
            }
          }
        });
      })
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
        this._router.navigate(['/']);
      };
    };
    `;

    return methods;
  }
};