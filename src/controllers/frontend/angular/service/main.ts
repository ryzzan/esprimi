// Interfaces
import { MainInterface } from "../../../../interfaces/main";
import { FormElementInterface, ServiceInterface } from "../../../../interfaces/form";

// Utils
import { TextTransformation } from "../../../../utils/text.transformation";

export class CodeToAngularService {
    createServiceCode = async (
        projectName: string, 
        object: MainInterface
    ): Promise<string> => {
        const serviceSkeletonCode = `
                                    import { HttpClient } from '@angular/common/http';
                                    import { Injectable } from '@angular/core';
                            
                                    @Injectable({
                                    providedIn: 'root',
                                    })
                                    export class %pascalfy(${projectName})%Service {
                                        BASE_URL = '%BASE_URL%';

                                        constructor(private _httpClient: HttpClient) {}

                                        %SERVICES%
                                    }
                                    `;

        let code = serviceSkeletonCode;

        if (object.form) {
            let serviceCode = this.createFormService(object.form.elements);

            if (object.form.service) {
                serviceCode += this.createService(projectName, object.form.service);
                
                code = code.replace('%BASE_URL%', object.form.service.baseUrl);
                code = code.replace('%SERVICES%', serviceCode);
            }
        }

        if (object.table?.service) {
            const serviceCode = this.createService(projectName, object.table.service);
            
            code = code.replace('%BASE_URL%', object.table.service.baseUrl);
            code = code.replace('%SERVICES%', serviceCode);
        }

        code = TextTransformation.replaceKebabfyFunctionToString(code);
        code = TextTransformation.replacePascalfyFunctionToString(code);
        code = TextTransformation.replacePlurarizeFunctionToString(code);
        
        return code;
    }

    createService = (
        projectName: string, 
        service: ServiceInterface
    ) => {
        const array = service.methods;
        let code = '';
        array.forEach(element => {
            switch (element) {
                case 'get':
                    code += `
                            getAll() {
                                return this._httpClient.get(
                                    \`\${this.BASE_URL}/${service.endPoint}\`, {
                                    headers: {
                                        'Authorization': \`Bearer \${sessionStorage.getItem('token')}\`
                                    }
                                }
                                ).toPromise();
                            };
                            `;
                    break;
                
                case 'find':
                    code += `
                            find(id: string) {
                                return this._httpClient.get(
                                    \`\${this.BASE_URL}/${service.endPoint}/\${id}\`,
                                    {
                                        headers: {
                                            'Authorization': \`Bearer \${sessionStorage.getItem('token')}\`
                                        }
                                    }
                                ).toPromise();
                            };
                            `;
                    break;

                case 'save':
                    code += `
                            save(body: any) {
                                return this._httpClient.post(
                                \`\${this.BASE_URL}/${service.endPoint}\`, 
                                body,
                                {
                                    headers: {
                                        'Authorization': \`Bearer \${sessionStorage.getItem('token')}\`
                                    }
                                }
                                ).toPromise();
                            };
                            `;
                    break;
                
                case 'update':
                    code += `
                            update(body: any, id: string) {
                                return this._httpClient.put(
                                    \`\${this.BASE_URL}/${service.endPoint}/\${id}\`, 
                                    body,
                                    {
                                        headers: {
                                            'Authorization': \`Bearer \${sessionStorage.getItem('token')}\`
                                        }
                                    }
                                ).toPromise();
                            };
                            `;
                    break;

                case 'delete':
                    code += `
                            delete(id: string) {
                                return this._httpClient.delete(
                                    \`\${this.BASE_URL}/${service.endPoint}/\${id}\`,
                                    {
                                        headers: {
                                            'Authorization': \`Bearer \${sessionStorage.getItem('token')}\`
                                        }
                                    }
                                ).toPromise();
                            };
                            `;
                    break;
                
                case 'softDelete':
                    code += `
                            softDelete(id: string) {
                                return this._httpClient.product(
                                    \`\${this.BASE_URL}/${service.endPoint}/\${id}\`,
                                    {
                                        headers: {
                                            'Authorization': \`Bearer \${sessionStorage.getItem('token')}\`
                                        }
                                    }
                                ).toPromise();
                            };
                            `;
                    break;
            
                default:
                    code += ``;
                    break;
            }
        });

        return code;
    }

    createFormService = (elements: Array<FormElementInterface>): string => {
        let selectObjectServiceCode = '';
        elements.forEach((object: any) => {
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    const element = object[key];
                    if (key === 'tabs') {
                        const tabs = object[key];
                        if (tabs) {
                            tabs.forEach((tab: any) => {
                                selectObjectServiceCode += this.createFormService(tab.elements);
                            });
                        }
                    }

                    if (key === 'array') {
                        const array = object[key];

                        selectObjectServiceCode += this.createFormService(array.elements);
                    }

                    if (key === 'select') {
                        if (element?.optionsApi) {
                            selectObjectServiceCode += `${object.select.name}SelectObjectGetAll() {
                                return this._httpClient.get(
                                    \`\${this.BASE_URL}/${element.optionsApi.endpoint}\`, {
                                    headers: {
                                        'Authorization': \`Bearer \${sessionStorage.getItem('token')}\`
                                    }
                                }
                                ).toPromise();
                            }`;
                        }
                    }
                }
            }
        });
        return selectObjectServiceCode;
    }
}