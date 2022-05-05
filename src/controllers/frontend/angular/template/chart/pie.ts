import { ChartInterface } from "../../../../../interfaces/chart";

export class CodeToAngularChartTemplatePie {
    static createPie = (chart: ChartInterface): string => {
        const codePie = `
        <div>
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}PieChartData"
                  [options]="${chart.id}PieChartOptions"
                  [plugins]="${chart.id}PieChartPlugins"
                  [type]="${chart.id}PieChartType">
          </canvas>
        </div>
        `;

        return codePie;
    }
}