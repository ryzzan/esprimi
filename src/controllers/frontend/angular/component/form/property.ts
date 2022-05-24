import { FormInputTypeEnum } from "../../../../../enums/form";
import { FormElementInterface } from "../../../../../interfaces/form";
import { MainInterface } from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";

export class CodeToAngularFormComponentProperty {
    static customProperties = (object: MainInterface): string => {
        if (object.form) {
            const elements = object.form.elements;
            const properties = CodeToAngularFormComponentProperty.createFormProperties(elements);
            
            const componentCode = `
                                ${properties}
                                ${object.form.id}Id: string = '';
                                isAddModule: boolean = true;
                                ${object.form.id}Form: FormGroup;
                                ${object.form.id}ToEdit: any;
                                isLoading = true;
                                `;
                                
            return componentCode;
        }

        return '';
    }

    static createFormProperties = (elements: Array<FormElementInterface>): string => {
        let properties = '';

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            if (element.input?.type === FormInputTypeEnum.File) {
                properties += `fileName: string = '';`
            }

            if (element.tabs) {
                element.tabs.forEach(elementTab => {
                    properties += CodeToAngularFormComponentProperty.createFormProperties(elementTab.elements);
                })
            }

            if (element.array) {
                properties += CodeToAngularFormComponentProperty.createFormProperties(element.array.elements);
            }

            if (element.select) {
                if (element.select.optionsObject) {                        
                    properties += `${element.select.name}SelectObject = ${JSON.stringify(element.select.optionsObject)};`;
                }

                if (element.select.optionsApi) {
                    properties += `${element.select.name}SelectObject: Array<SelectObjectInterface> = [];`;
                }
            }

            if (element.autocomplete) {
                properties += `
                ${element.autocomplete.name}SeparatorKeysCodes: number[] = [ENTER, COMMA];
                filtered${TextTransformation.pascalfy(element.autocomplete.name)}: Array<any> = [];
                chosen${TextTransformation.pascalfy(element.autocomplete.name)}View: string[] = [];
                chosen${TextTransformation.pascalfy(element.autocomplete.name)}Value: string[] = [];
                
                @ViewChild('${element.autocomplete.name}Input') ${element.autocomplete.name}Input!: ElementRef<HTMLInputElement>;
                `;
            }

            if (element.checkbox) {
                if (element.checkbox.optionsObject) {                        
                    properties += `${element.checkbox.name}CheckboxObject = ${JSON.stringify(element.checkbox.optionsObject)};`;
                }

                if (element.checkbox.optionsApi) {
                    properties += `${element.checkbox.name}CheckboxObject: Array<CheckboxObjectInterface> = [];`;
                }
            }
        }

        return properties;
    }
}
