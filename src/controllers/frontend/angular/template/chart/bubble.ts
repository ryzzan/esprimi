import { ChartBubbleInterface, ChartInterface } from "../../../../../interfaces/chart";

export class CodeToAngularChartTemplateBubble {
    static createBubble = (chart: ChartInterface): string => {
        const codeBubble = `
        <div *ngIf="!isLoading">
          <canvas baseChart width="300" height="300"
                  [data]="${chart.id}BubbleChartData"
                  [options]="${chart.id}BubbleChartOptions"
                  [type]="${chart.id}BubbleChartType"
                  [legend]="true">
          </canvas>
        </div>
        `;

        return codeBubble;
    }
}