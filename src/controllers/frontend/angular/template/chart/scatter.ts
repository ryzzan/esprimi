import { ChartInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";
import { CodeToAngularChartTemplateMenu } from "./chart-menu";

export class CodeToAngularChartTemplateScatter {
  static createScatter = (
    object: MainInterface,
    chart: ChartInterface
  ): string => {
    const codeScatter = `
        ${CodeToAngularChartTemplateMenu.createChartMenu(object)}
        <div *ngIf="!isLoading">
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}ScatterChartData"
                  [options]="${chart.id}ScatterChartOptions"
                  [type]="${chart.id}ScatterChartType">
          </canvas>
        </div>
        `;

    return codeScatter;
  };
}
