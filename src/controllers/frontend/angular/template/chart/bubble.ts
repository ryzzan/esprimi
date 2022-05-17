import {
  ChartBubbleInterface,
  ChartInterface,
} from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";
import { CodeToAngularChartTemplateMenu } from "./chart-menu";

export class CodeToAngularChartTemplateBubble {
  static createBubble = (
    object: MainInterface,
    chart: ChartInterface
  ): string => {
    const codeBubble = `
        <div *ngIf="!isLoading">
          ${CodeToAngularChartTemplateMenu.createChartMenu(object)}
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}BubbleChartData"
                  [options]="${chart.id}BubbleChartOptions"
                  [type]="${chart.id}BubbleChartType"
                  [legend]="true">
          </canvas>
        </div>
        `;

    return codeBubble;
  };
}
