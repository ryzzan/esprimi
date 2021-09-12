import { MainInterface } from "../../../../../interfaces/main";

export class CodeToAngularFormComponentProperty {
    static customProperties = (object: MainInterface): string => {
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
