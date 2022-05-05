import { ChartInterface } from "../../../../../interfaces/chart";

export class CodeToAngularChartTemplateRadar {
    static createRadar = (chart: ChartInterface): string => {
        const codeRadar = `
        <div>
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}RadarChartData"
                  [options]="${chart.id}RadarChartOptions"
                  [type]="${chart.id}RadarChartType">
          </canvas>
        </div>
        `;

        return codeRadar;
    }
}