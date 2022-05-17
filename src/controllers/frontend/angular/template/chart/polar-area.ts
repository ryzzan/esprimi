import { ChartInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";
import { CodeToAngularChartTemplateMenu } from "./chart-menu";

export class CodeToAngularChartTemplatePolarArea {
  static createPolarArea = (
    object: MainInterface,
    chart: ChartInterface
  ): string => {
    const codePolarArea = `
        ${CodeToAngularChartTemplateMenu.createChartMenu(object)}
        <div *ngIf="!isLoading">
          <canvas baseChart width="300" height="300"
              [data]="${chart.id}PolarAreaChartData"
              [options]="${chart.id}PolarAreaChartOptions"
              [type]="${chart.id}PolarAreaChartType">
          </canvas>
        </div>
        `;

    return codePolarArea;
  };
}
