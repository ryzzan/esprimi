import { MainInterface } from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

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
                        import { FormBuilder, FormGroup, ${hasArray} } from '@angular/forms';
                        import { MyErrorHandler } from 'src/utils/error-handler';
                        `;
        });

        elements?.forEach(element => {
            if (element.row?.menu) {
                const menus = element.row?.menu;
                let menuImport = '';

                menus.forEach(menu => {
                    if (menu.dialog?.id) {                        
                        menuImport = `import {${TextTransformation.pascalfy(menu.dialog.id)}Component} from '../${TextTransformation.kebabfy(menu.dialog.id)}/${TextTransformation.kebabfy(menu.dialog.id)}.component'; `;
                    }
                });

                hasDialog = `
                            ${menuImport}
                            import { MatDialog } from '@angular/material/dialog';
                            `;
            }
        });

        const componentCode = `
                            ${hasAction}
                            ${hasDialog}
                            import { ActivatedRoute } from '@angular/router';
                            import { %pascalfy(${object.table.id})%Service } from './%kebabfy${object.table.id}%.service';
                            import { MatSnackBar } from '@angular/material/snack-bar';
                            `;

        return componentCode;
    }
}