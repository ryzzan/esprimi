import { ChartInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";

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
      ${chart.id}LineChartClicked({
        event,
        active,
      }: {
        event?: ChartEvent;
        active?: {}[];
      }): void {
        console.log(event, active);
      };

      ${chart.id}LineChartHovered({
        event,
        active,
      }: {
        event?: ChartEvent;
        active?: {}[];
      }): void {
        console.log(event, active);
      };
      `;
    }

    return methods;
  }
};