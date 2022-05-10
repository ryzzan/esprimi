import { ChartInterface } from "../../../../../interfaces/chart";

export class CodeToAngularChartTemplateBar {
    static createBar = (chart: ChartInterface): string => {
        const codeBar = `
        <div>
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}BarChartData"
                  [options]="${chart.id}BarChartOptions"
                  [type]="${chart.id}BarChartType"
                  (chartHover)="${chart.id}BarChartHovered($event)"
                  (chartClick)="${chart.id}BarChartClicked($event)">
          </canvas>
        </div>
        `;

        return codeBar;
    }
}