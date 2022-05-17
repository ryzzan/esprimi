import { ListInterface } from "../../../../../interfaces/list";
import { MainInterface } from "../../../../../interfaces/main";

export class CodeToAngularListComponentProperty {
    static customProperties = (object: MainInterface): string => {
        if (!object.list) return "";

        const list = object.list;
        const properties = CodeToAngularListComponentProperty.createListProperties(list);        
        const componentCode = `${properties}`;
                            
        return componentCode;
    };
    
    static createListProperties = (list: ListInterface): string => {
        let properties = `
        ${list.id}Id: string = '';
        ${list.id}DataSource: any = [];
        ${list.id}SearchForm: FormGroup;
        isLoading = true;
        `;

        return properties;
    };
}
