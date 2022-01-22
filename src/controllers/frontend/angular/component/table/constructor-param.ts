import {
    MainInterface
} from "../../../../../interfaces/main";
import {
    CodeToAngularTableComponentMethod
} from "./method";

export class CodeToAngularTableComponentConstructorParam {
    static customConstructorParam = (object: MainInterface): string => {
        let hasAction = '';
        if (object.table) {
            if (object.table.actions) 
                hasAction = `
                            private _formBuilder: FormBuilder, 
                            private _errorHandler: MyErrorHandler,
                            private _snackbar: MatSnackBar,
                            `;

            const componentCode = `
                                ${hasAction}
                                private _dialog: MatDialog, 
                                private _${object.table.id}Service: %pascalfy(${object.table.id})%Service,
                                `;

            return componentCode;
        }

        return '';
    }
}