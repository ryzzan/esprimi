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
        isLoading = true;
        `;
        
        if (chart.line) {
          properties += `
          ${chart.id}LineChartData: ChartConfiguration["data"] = {
            datasets: ${ (chart.line.datasets.length > 0) ? JSON.stringify(chart.line.datasets) : `set${TextTransformation.pascalfy(chart.id)}Service()` },
            labels: ${ JSON.stringify(chart.line.labels) },
          };

          ${chart.id}LineChartOptions: ChartConfiguration["options"] = {
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
            datasets: ${ (chart.bar.datasets.length > 0) ? JSON.stringify(chart.bar.datasets) : `set${TextTransformation.pascalfy(chart.id)}Service()` },
            labels: ${ JSON.stringify(chart.bar.labels) },
          };

          ${chart.id}BarChartOptions: ChartConfiguration["options"] = {
            responsive: true,
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
