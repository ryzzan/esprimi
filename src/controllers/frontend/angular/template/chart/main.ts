import {
    MainInterface
} from "../../../../../interfaces/main";
import { ChartInterface } from "../../../../../interfaces/chart";
import {
    TextTransformation
} from "../../../../../utils/text.transformation";
import { CodeToAngularChartTemplateBar } from "./bar";

export class CodeToAngularChartTemplate {
    createChartSkeleton(object: MainInterface): string {
        if (!object.chart) return '';
        const hasFormTitle = (object.chart.title) ?
            `<mat-card-title>${object.chart.title}</mat-card-title>` :
            '';

        const hasFormSubtitle = (object.chart.subtitle) ?
            `<mat-card-subtitle>${object.chart.subtitle}</mat-card-subtitle>` :
            '';
        const chartTemplate = `
        <mat-card>
            <mat-card-header>
                ${hasFormTitle}
                ${hasFormSubtitle}
            </mat-card-header>

            <mat-card-content>
                <div *ngIf="isLoading" class="loading">
                    <mat-progress-bar color="primary" mode="buffer">
                    </mat-progress-bar>
                </div>
                ${this.createChartComponents(object, object.chart)}
            </mat-card-content>
        </mat-card>
        `;

        return chartTemplate;
    }

    private createChartComponents = (object: MainInterface, chart: ChartInterface): string => {
        let code = '';

        if (chart.bar) code += CodeToAngularChartTemplateBar.createBar(chart.bar);
        // if (chart.bubble) code += CodeToAngularChartTemplateBubble.createBubble(chart.bubble);
        // if (chart.doughnut) code += CodeToAngularChartTemplateDoughnut.createDoughnut(chart.doughnut);
        // if (chart.line) code += CodeToAngularChartTemplateLine.createLine(chart.line);
        // if (chart.pie) code += CodeToAngularChartTemplatePie.createPie(chart.pie);
        // if (chart.polarArea) code += CodeToAngularChartTemplatePolarArea.createPolarArea(chart.polarArea);
        // if (chart.radar) code += CodeToAngularChartTemplateRadar.createRadar(chart.radar);
        // if (chart.scatter) code += CodeToAngularChartTemplateScatter.createScatter(chart.scatter);

        return code;
    }
}