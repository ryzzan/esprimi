import { MainInterface } from "../../../../../interfaces/main";

export class CodeToAngularTableComponentImport {
    static customImports = (object: MainInterface): string => {
        let hasAction = '';
        let hasArray = '';
        let hasDialog = '';

        if (!object.table) return '';
        
        const actions = object.table.actions;
        const elements = object.table.elements;
        
        actions?.elements.forEach(action => {
            if (action.array) hasArray = ', FormArray';
            
            hasAction = `
                        import { FormBuilder, FormGroup, ${hasArray} } from '@angular/tables';
                        `;
        });

        elements?.forEach(element => {
            if (element.row?.menu) hasDialog = `
                                                import { MatDialog } from '@angular/material/dialog';
                                                import {%pascalfy${object.table?.id}%Component} from '../%kebabfy(${object.table?.id})%/%kebabfy(${object.table?.id})%.component';
                                                `;
        });

        const componentCode = `
                            ${hasAction}
                            ${hasDialog}
                            import { ActivatedRoute } from '@angular/router';
                            import { %pascalfy(${object.table.id})%Service } from './%kebabfy${object.table.id}%.service';
                            `;

        return componentCode;
    }
}