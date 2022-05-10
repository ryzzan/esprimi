import { ChartInterface } from "../../../../../interfaces/chart";

export class CodeToAngularChartTemplateBar {
    static createBar = (chart: ChartInterface): string => {
        const codeBar = `
        <div *ngIf="!isLoading">
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