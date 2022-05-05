import { ChartInterface } from "../../../../../interfaces/chart";

export class CodeToAngularChartTemplatePolarArea {
    static createPolarArea = (chart: ChartInterface): string => {
        const codePolarArea = `
        <div>
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}PolarAreaChartData"
                  [options]="${chart.id}PolarAreaChartOptions"
                  [type]="${chart.id}PolarAreaChartType">
          </canvas>
        </div>
        `;

        return codePolarArea;
    }
}