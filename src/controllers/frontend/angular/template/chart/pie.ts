import { ChartInterface } from "../../../../../interfaces/chart";

export class CodeToAngularChartTemplatePie {
    static createPie = (chart: ChartInterface): string => {
        const codePie = `
        <div *ngIf="!isLoading">
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}PieChartData"
                  [options]="${chart.id}PieChartOptions"
                  [type]="${chart.id}PieChartType">
          </canvas>
        </div>
        `;

        return codePie;
    }
}