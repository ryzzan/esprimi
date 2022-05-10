import { ChartInterface } from "../../../../../interfaces/chart";

export class CodeToAngularChartTemplateScatter {
    static createScatter = (chart: ChartInterface): string => {
        const codeScatter = `
        <div *ngIf="!isLoading">
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}ScatterChartData"
                  [options]="${chart.id}ScatterChartOptions"
                  [type]="${chart.id}ScatterChartType">
          </canvas>
        </div>
        `;

        return codeScatter;
    }
}