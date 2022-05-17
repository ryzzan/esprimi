import { ChartInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";
import { CodeToAngularChartTemplateMenu } from "./chart-menu";

export class CodeToAngularChartTemplateBar {
    static createBar = (object: MainInterface, chart: ChartInterface): string => {
        const codeBar = `
        <div *ngIf="!isLoading">
          ${CodeToAngularChartTemplateMenu.createChartMenu(object)}
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}BarChartData"
                  [options]="${chart.id}BarChartOptions"
                  [type]="${chart.id}BarChartType"
                  (chartClick)="${chart.id}BarChartClicked($event)">
          </canvas>
        </div>
        `;

        return codeBar;
    }
}