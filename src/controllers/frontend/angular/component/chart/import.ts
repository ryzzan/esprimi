import { ChartInterface } from "../../../../../interfaces/chart";
import { MainInterface } from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

export class CodeToAngularChartComponentImport {
  static customImports = (object: MainInterface): string => {
    if (!object.chart) return "";

    const chart = object.chart;
    const imports = CodeToAngularChartComponentImport.createChartImports(chart);
    const componentCode = `${imports}`;

    return componentCode;
  };

  static createChartImports = (chart: ChartInterface): string => {
    let hasArray = '';

    if (!chart) return '';
    
    const actions = chart.actions;
    
    actions?.elements.forEach((action: any) => {
        if (action.array) hasArray = ', FormArray';
    });
    
    let imports = `
    import { MatSnackBar } from '@angular/material/snack-bar';
    import { MatDialog } from '@angular/material/dialog';
    import { %pascalfy(${chart.id})%Service } from './%kebabfy${chart.id}%.service';
    import { FormBuilder, FormGroupDirective, FormGroup, ${hasArray} } from '@angular/forms';
    import { ActivatedRoute, Router } from '@angular/router';
    import { MyErrorHandler } from '../../utils/error-handler';
    `;

    if (chart.line) {
      imports += `      
      import { ChartConfiguration, ChartEvent, ChartType } from "chart.js";
      `;
    }

    if (chart.bar) {
      imports += `      
      import { ChartConfiguration, ChartEvent, ChartType, ChartData } from "chart.js";
      `;
    }

    return imports;
  };
}
