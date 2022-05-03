import { ChartBarInterface } from "../../../../../interfaces/chart";
import { TextTransformation } from "../../../../../utils/text.transformation";

export class CodeToAngularChartTemplateBar {
    static createBar = (bar: ChartBarInterface): string => {
        const codeBar = `
        <div>
          <canvas baseChart width="300" height="300"
                  [data]="${bar.id}LineChartData"
                  [options]="${bar.id}LineChartOptions"
                  [type]="${bar.id}LineChartType"
                  (chartHover)="${bar.id}LineChartHovered($event)"
                  (chartClick)="${bar.id}LineChartClicked($event)"></canvas>
        </div>
        `;

        return codeBar;
    }
}