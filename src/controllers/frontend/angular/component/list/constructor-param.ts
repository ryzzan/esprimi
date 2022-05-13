import {
    MainInterface
} from "../../../../../interfaces/main";

export class CodeToAngularListComponentConstructorParam {
    static customConstructorParam = (object: MainInterface): string => {
        if (object.list) {
            const componentCode = `
            private router: Router,
            private _formBuilder: FormBuilder,
            private _activatedRoute: ActivatedRoute,
            private _${object.list.id}Service: %pascalfy(${object.list.id})%Service,
            private _errorHandler: MyErrorHandler,
            private _snackbar: MatSnackBar,
            private _dialog: MatDialog,
            `;

            return componentCode;
        }

        return '';
    }
}