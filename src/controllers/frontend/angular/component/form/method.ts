import { FormElementInterface } from "../../../../../interfaces/form";
import {
    MainInterface
} from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";
import { CodeToAngularFormComponentConstructorArg } from "./constructor-arg";

export class CodeToAngularFormComponentMethod {
    static customMethod = (object: MainInterface): string => {
        let arrayMethodCode = '';

        if (object.form) {
            const elements = object.form.elements;
            const methods = CodeToAngularFormComponentMethod.createFormMethods(elements, object);            
            
            const componentCode = `
                                ${methods}
                                ${object.form.id}Submit() {
                                    this._${object.form.id}Service
                                    .save(this.${object.form.id}Form.value)
                                    .then((res) => {
                                        this.isLoading = false;
                                    })
                                    .catch((err) => {
                                        this.isLoading = false;
                                        const message = this._errorHandler.apiErrorMessage(err.error.error.message);
                                        this._snackbar.open(message, undefined, {
                                            duration: 4 * 1000,
                                        });
                                    })
                                }
                                `;

            return componentCode;
        }

        return '';
    }

    static createFormMethods = (elements: Array<FormElementInterface>, object: MainInterface): string => {
        let methods = '';

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            if (element.tabs) {
                element.tabs.forEach(elementTab => {
                    methods += CodeToAngularFormComponentMethod.createFormMethods(elementTab.elements, object);
                })
            }

            if (element.array) {
                const add = `add${TextTransformation.pascalfy(element.array.id)}`;
                const remove = `remove${TextTransformation.pascalfy(element.array.id)}`;
                const newArray = `new${TextTransformation.pascalfy(element.array.id)}`;

                methods += `${add}() {this.${element.array.id}.push(this.${newArray}())};
                                    get ${element.array.id}(): FormArray {return this.${object.form?.id}Form.get('${element.array.id}') as FormArray;};
                                    ${newArray}(): FormGroup { return this._formBuilder.group({
                                        ${CodeToAngularFormComponentConstructorArg.createFormBuilder(element.array.elements, object)}
                                    })};
                                    ${remove}(i:number) {this.${element.array.id}.removeAt(i)}`;

                methods += CodeToAngularFormComponentMethod.createFormMethods(element.array.elements, object);
            }        
        }

        return methods;
    }
}