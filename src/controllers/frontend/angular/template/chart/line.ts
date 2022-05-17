import { ChartInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";
import { CodeToAngularChartTemplateMenu } from "./chart-menu";

export class CodeToAngularChartTemplateLine {
  static createLine = (
    object: MainInterface,
    chart: ChartInterface
  ): string => {
    const codeLine = `
    ${CodeToAngularChartTemplateMenu.createChartMenu(object)}
    <div *ngIf="!isLoading">
        <canvas baseChart width="300" height="300"
                [data]="${chart.id}LineChartData"
                [options]="${chart.id}LineChartOptions"
                [type]="${chart.id}LineChartType"
                (chartClick)="${chart.id}LineChartClicked($event)"></canvas>
    </div>
    `;

    return codeLine;
  };
}
