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
                                ${object.form.id}Submit = async (
                                    ${object.form?.id}Directive: FormGroupDirective
                                ) => {
                                    this.isLoading = true;

                                    try {
                                        ${file}
                                        if(this.isAddModule) {
                                            await this._${object.form.id}Service.save(
                                                this.${object.form.id}Form.value
                                            );
                                        }
                                
                                        if(!this.isAddModule) {
                                            await this._${object.form.id}Service.update(
                                                this.${object.form.id}Form.value,
                                                this.${object.form.id}Id
                                            );
                                        }

                                        this.redirectTo("main/${object.form.id.split('Form')[0]}");
                                        this.isLoading = false;
                                    } catch (error: any) {
                                        if (error.error.logMessage === 'jwt expired') {
                                            await this.refreshToken();
                                            this.${object.form.id}Submit(${object.form?.id}Directive);
                                        } else {
                                            const message = this._errorHandler
                                                                .apiErrorMessage(error.error.message);
                                            this.isLoading = false;
                                            this.sendErrorMessage(message);
                                        }
                                    };
                                    
                                    this.${object.form?.id}Form.reset();
                                    ${object.form?.id}Directive.resetForm();
                                };

                                refreshToken = async () => {
                                    try {
                                        const res: any = await this._${object.form.id}Service.refreshToken();

                                        if (res) {
                                            sessionStorage.setItem('token', res?.data.authToken);
                                            sessionStorage.setItem('refreshToken', res?.data.authRefreshToken);
                                        }
                                    } catch (error: any) {
                                        const message = this._errorHandler
                                                            .apiErrorMessage(error.error.message);
                                        this.isLoading = false;
                                        this.sendErrorMessage(message);
                                        sessionStorage.clear();
                                        this.router.navigate(['/']);
                                    };
                                };

                                redirectTo = (uri:string) => {
                                    this.router.navigateByUrl('/main', {skipLocationChange: true})
                                    .then(() => {
                                        this.router.navigate([uri]);
                                    });
                                };

                                checkOptionsCreation = async(functions: Array<Function>, index: number) => {
                                    const newIndex = index + 1;
                                
                                    if (newIndex <= functions.length) {
                                      await functions[index].call(null);
                                      this.checkOptionsCreation(functions, newIndex);
                                    } else {
                                      this.isLoading = false;
                                    }
                                };
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

            if (element.select?.optionsApi) {
                methods += `
                set${TextTransformation.pascalfy(element.select?.name)}SelectObject = async () => {
                    try {
                        const array: any = await this._${object.form?.id}Service
                                                    .${element.select.name}SelectObjectGetAll();

                        if (array.data?.result) {
                            array.data?.result.map((object: any) => {
                                this.${element.select?.name}SelectObject.push({
                                  label: object.name,
                                  value: object._id,
                                });
                            });
                        }
                    } catch (error: any) {
                        const message = this._errorHandler.apiErrorMessage(
                          error.error.message
                        );
                        this.sendErrorMessage(message);
                    };
                };`;
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