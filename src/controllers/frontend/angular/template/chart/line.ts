import { ChartInterface } from "../../../../../interfaces/chart";

export class CodeToAngularChartTemplateLine {
    static createLine = (chart: ChartInterface): string => {
        const codeLine = `
        <div>
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}LineChartData"
                  [options]="${chart.id}LineChartOptions"
                  [type]="${chart.id}LineChartType"
                  (chartHover)="${chart.id}LineChartHovered($event)"
                  (chartClick)="${chart.id}LineChartClicked($event)"></canvas>
        </div>
        `;

        return codeLine;
    }
}