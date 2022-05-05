import { ChartInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";

export class CodeToAngularChartComponentProperty {
    static customProperties = (object: MainInterface): string => {
        if (!object.chart) return "";

        const chart = object.chart;
        const properties = CodeToAngularChartComponentProperty.createChartProperties(chart);        
        const componentCode = `${properties}`;
                            
        return componentCode;
    }
    
    static createChartProperties = (chart: ChartInterface): string => {
        let properties = "";
        if (chart.line) {
          properties += `
          ${chart.id}LineChartData: ChartConfiguration["data"] = {
            datasets: [],
            labels: [],
          };

          ${chart.id}LineChartOptions: ChartConfiguration["options"] = {
            elements: {
              line: {
                tension: ${chart.line.tension ? chart.line.tension : "0.5"},
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

        return properties;
    }
}
