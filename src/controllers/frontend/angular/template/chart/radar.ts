import { ChartInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";
import { CodeToAngularChartTemplateMenu } from "./chart-menu";

export class CodeToAngularChartTemplateRadar {
  static createRadar = (
    object: MainInterface,
    chart: ChartInterface
  ): string => {
    const codeRadar = `
        ${CodeToAngularChartTemplateMenu.createChartMenu(object)}
        <div *ngIf="!isLoading">
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}RadarChartData"
                  [options]="${chart.id}RadarChartOptions"
                  [type]="${chart.id}RadarChartType">
          </canvas>
        </div>
        `;

    return codeRadar;
  };
}
