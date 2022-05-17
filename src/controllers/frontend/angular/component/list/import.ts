import { ListInterface } from "../../../../../interfaces/list";
import { MainInterface } from "../../../../../interfaces/main";

export class CodeToAngularListComponentImport {
  static customImports = (object: MainInterface): string => {
    if (!object.list) return "";

    const list = object.list;
    const imports = CodeToAngularListComponentImport.createListImports(list);
    const componentCode = `${imports}`;

    return componentCode;
  };

  static createListImports = (list: ListInterface): string => {
    if (!list) return '';

    let hasArray = '';

    const actions = list.actions;
    
    actions?.elements.forEach((action: any) => {
        if (action.array) hasArray = ', FormArray';
    });
    
    let imports = `
    import { MatSnackBar } from "@angular/material/snack-bar";
    import { MatDialog } from "@angular/material/dialog";
    import { %pascalfy(${list.id})%Service } from "./%kebabfy${list.id}%.service";
    import { FormBuilder, FormGroupDirective, FormGroup, ${hasArray} } from "@angular/forms";
    import { ActivatedRoute, Router } from "@angular/router";
    import { MyErrorHandler } from "../../utils/error-handler";
    import { GenericAnalyticReportComponent } from "../generic-analytic-report/generic-analytic-report.component";
    `;

    return imports;
  };
}
