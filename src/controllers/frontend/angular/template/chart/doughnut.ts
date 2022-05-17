import { ChartInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";
import { CodeToAngularChartTemplateMenu } from "./chart-menu";

export class CodeToAngularChartTemplateDoughnut {
  static createDoughnut = (
    object: MainInterface,
    chart: ChartInterface
  ): string => {
    const codeDoughnut = `
    ${CodeToAngularChartTemplateMenu.createChartMenu(object)}
    <div *ngIf="!isLoading">
      <canvas baseChart width="300" height="300"
              [data]="${chart.id}DoughnutChartData"
              [type]="${chart.id}DoughnutChartType">
      </canvas>
    </div>
    `;

    return codeDoughnut;
  };
}
