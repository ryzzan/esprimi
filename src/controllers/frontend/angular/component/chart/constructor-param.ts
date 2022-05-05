import {
    MainInterface
} from "../../../../../interfaces/main";

export class CodeToAngularChartComponentConstructorParam {
    static customConstructorParam = (object: MainInterface): string => {
        if (object.chart) {
            const componentCode = `
            private router: Router,
            private _formBuilder: FormBuilder,
            private _activatedRoute: ActivatedRoute,
            private _${object.chart.id}Service: %pascalfy(${object.chart.id})%Service,
            private _errorHandler: MyErrorHandler,
            private _snackbar: MatSnackBar,
            `;

            return componentCode;
        }

        return '';
    }
}