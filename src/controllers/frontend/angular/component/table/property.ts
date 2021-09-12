import {
    MainInterface
} from "../../../../../interfaces/main";

export class CodeToAngularTableComponentProperty {
    static customProperties = (object: MainInterface): string => {
        let hasAction = '';
        if (object.table) {
            if (object.table.actions) {
                hasAction = `
                            ${object.table.id}Form: FormGroup;
                            `;
            }

            const componentCode = `
                                ${hasAction}
                                ${object.table.id}DataSource: any = []; 
                                isLoading = true;
                                `;

            return componentCode;
        }

        return '';
    }
}