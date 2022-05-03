import { MainInterface } from "../../../../../interfaces/main";

export class CodeToAngularChartComponentImport {
    static customImports = (object: MainInterface): string => {
        if (!object.chart) return '';

        const componentCode = `import Chart from 'chart.js/auto';`;

        return componentCode;
    }
}