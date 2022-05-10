import { ChartInterface } from "../../../../../interfaces/chart";

export class CodeToAngularChartTemplateDoughnut {
    static createDoughnut = (chart: ChartInterface): string => {
        const codeDoughnut = `
        <div *ngIf="!isLoading">
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}DoughnutChartData"
                  [type]="${chart.id}DoughnutChartType">
          </canvas>
        </div>
        `;

        return codeDoughnut;
    }
}