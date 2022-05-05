import { ChartInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";

export class CodeToAngularChartComponentImport {
  static customImports = (object: MainInterface): string => {
    if (!object.chart) return "";

    const chart = object.chart;
    const imports = CodeToAngularChartComponentImport.createChartImports(chart);
    const componentCode = `${imports}`;

    return componentCode;
  };

  static createChartImports = (chart: ChartInterface): string => {
    let imports = "";

    if (chart.line) {
      imports += `
            import { ChartConfiguration, ChartEvent, ChartType } from "chart.js";
            `;
    }

    return imports;
  };
}
