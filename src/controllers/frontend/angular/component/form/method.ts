import { FormInputTypeEnum } from "../../../../../enums/form";
import { FormElementInterface } from "../../../../../interfaces/form";
import {
    MainInterface
} from "../../../../../interfaces/main";
import { TextTransformation } from "../../../../../utils/text.transformation";
import { CodeToAngularFormComponentConstructorArg } from "./constructor-arg";

export class CodeToAngularFormComponentMethod {
    static customMethod = (object: MainInterface): string => {
        if (object.form) {
            const elements = object.form.elements;
            const methods = CodeToAngularFormComponentMethod.createFormMethods(elements, object);            
            const file = CodeToAngularFormComponentMethod.setFileSubmit(elements, object);
            const componentCode = `
                                ${methods}
                                ${object.form.id}Submit() {
                                    ${file}
                                    this._${object.form.id}Service
                                    .save(this.${object.form.id}Form.value)
                                    .then((res) => {
                                        this.isLoading = false;
                                    })
                                    .catch((err) => {
                                        const message = this._errorHandler.apiErrorMessage(err.message);

                                        this.isLoading = false;

                                        this.sendErrorMessage(message);
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

            if (element.input?.type === FormInputTypeEnum.File) {
                methods += `onFileSelected(event: any) {
                                if (event.target.files.length > 0) {
                                    const file = event.target.files[0];
                                    this.fileName = file.name;
                                    const formData = new FormData();
                                
                                    this.fileFormForm.get('${element.input.name}')?.setValue(file);
                                }
                            }`;
            }
        }

        return methods;
    }

    static setFileSubmit = (elements: Array<FormElementInterface>, object: MainInterface): string => {
        let file = '';

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            if (element.input?.type === FormInputTypeEnum.File) {
                file += `const formData = new FormData();
                        formData.append('myFile', this.${object.form?.id}Form.get('${element.input.name}')?.value);`
            }
        }

        return file;
    }
}