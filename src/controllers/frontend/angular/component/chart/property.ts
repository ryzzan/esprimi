import { ChartBarDatasetInterface, ChartBubbleDatasetInterface, ChartDoughnutDatasetInterface, ChartInterface, ChartLineDatasetInterface, ChartPieDatasetInterface, ChartPolarAreaDatasetInterface, ChartRadarDatasetInterface, ChartScatterDatasetInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

export class CodeToAngularChartComponentProperty {
    static customProperties = (object: MainInterface): string => {
        if (!object.chart) return "";

        const chart = object.chart;
        const properties = CodeToAngularChartComponentProperty.createChartProperties(chart);        
        const componentCode = `${properties}`;
                            
        return componentCode;
    };
    
    static createChartProperties = (chart: ChartInterface): string => {
        let properties = `
        ${chart.id}Id: string = '';
        ${chart.id}DataSource: any = [];
        ${chart.id}SearchForm: FormGroup;
        mainFilter: string = \`start_date=\${
          new Date(new Date().setDate(new Date().getDate() - 30))
            .toISOString()
            .split("T")[0]
        }&finish_date=\${
          new Date().toISOString().split("T")[0]
        }&companies=\${
          JSON.parse(JSON.parse(JSON.stringify(sessionStorage.getItem('companies')))).map((item: any) => { return item.id; }).join()
        }\`;
        chartFilter: string = "";
        chartFilterObject: any[] = [];
        isLoading = true;
        @Input() chartInput: any = "";
        `;
        
        if (chart.line) {
          properties += `
          ${chart.id}LineChartData: ChartConfiguration["data"] = {
            datasets: ${ JSON.stringify(chart.line.datasets) },
            labels: ${ JSON.stringify(chart.line.labels) },
          };

          ${chart.id}LineChartOptions: ChartConfiguration["options"] = {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Definir título",
                font: {
                  size: 18
                }
              }
            },
            elements: {
              line: {
                tension: ${chart.line.tension ? chart.line.tension : 0.5},
              },
            },
            scales: {
              x: {},
              "y-axis-0": {
                position: "left",
              },
              "y-axis-1": {
                position: "right",
                grid: {
                  color: "rgba(255,0,0,0.3)",
                },
                ticks: {
                  color: "red",
                },
              },
            },
          };

          ${chart.id}LineChartType: ChartType = "line";
          `;
        }

        if (chart.bar) {
          properties += `
          ${chart.id}BarChartData: ChartConfiguration["data"] = {
            datasets: ${ JSON.stringify(chart.bar.datasets) },
            labels: ${ JSON.stringify(chart.bar.labels) },
          };

          ${chart.id}Background: Array<string> = ${chart.bar.backgroundColor ? chart.bar.backgroundColor : `["#1F7AFF", "#85B7FF", "#B8D5FF"]`};

          ${chart.id}BarChartOptions: ChartConfiguration["options"] = {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Definir título",
                font: {
                  size: 18
                }
              }
            },
            scales: {
              x: {},
              y: {
                min: 0
              }
            },
          };

          ${chart.id}BarChartType: ChartType = "bar";
          `;
        }

        if (chart.pie) {
          properties += `
          ${chart.id}PieChartData: ChartData<"pie", number[], string | string[]> = {
            datasets: ${ JSON.stringify(chart.pie.datasets) },
            labels: ${ JSON.stringify(chart.pie.labels) },
          };

          ${chart.id}Background: Array<string> = ${chart.pie.backgroundColor ? chart.pie.backgroundColor : `["#1F7AFF", "#85B7FF", "#B8D5FF"]`};

          ${chart.id}PieChartOptions: ChartConfiguration["options"] = {
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: "Definir título",
                font: {
                  size: 18
                }
              }
            },
          };

          ${chart.id}PieChartType: ChartType = "pie";
          `;
        }

        return properties;
    };

    setChartDataset = (dataset: Array<
      ChartBarDatasetInterface | 
      ChartPieDatasetInterface | 
      ChartLineDatasetInterface | 
      ChartRadarDatasetInterface |
      ChartBubbleDatasetInterface |
      ChartScatterDatasetInterface |
      ChartDoughnutDatasetInterface |
      ChartPolarAreaDatasetInterface
    >) => {
      let response = '';
    };
}
