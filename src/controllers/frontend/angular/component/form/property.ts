import { MainInterface } from "../../../../../interfaces/main";
import { CodeToAngularFormComponentConstructorArg } from "./constructor-arg";

export class CodeToAngularFormComponentProperty extends CodeToAngularFormComponentConstructorArg {
    customProperties = (object: MainInterface): string => {
        if (object.form) {
            const componentCode = `
                                ${object.form.id}Id: string;
                                isAddModule: boolean;
                                ${object.form.id}Form: FormGroup;
                                isLoading = false;
                                `;

            return componentCode;
        }

        return '';
    }
}
