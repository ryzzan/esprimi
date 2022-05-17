import { ChartInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";
import { CodeToAngularChartTemplateMenu } from "./chart-menu";

export class CodeToAngularChartTemplatePie {
  static createPie = (object: MainInterface, chart: ChartInterface): string => {
    const codePie = `
    ${CodeToAngularChartTemplateMenu.createChartMenu(object)}
    <div *ngIf="!isLoading">
      <canvas baseChart width="300" height="300"
              [data]="${chart.id}PieChartData"
              [options]="${chart.id}PieChartOptions"
              [type]="${chart.id}PieChartType"
              (chartClick)="${chart.id}PieChartClicked($event)">
      </canvas>
    </div>
    `;

    return codePie;
  };
}
