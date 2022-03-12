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

        if (object.form?.service) {
                let serviceCode = this.createFormService(object.form.elements, object.form.service);
                serviceCode += this.createService(projectName, object.form.service);
                
                code = code.replace('%BASE_URL%', object.form.service.baseUrl);
                code = code.replace('%SERVICES%', serviceCode);
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
        const hasAuthorization = service.hasAuthorization ? `'Authorization': \`Bearer \${sessionStorage.getItem('token')}\`` : '';
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
                                        ${hasAuthorization}
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
                                            ${hasAuthorization}
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
                                        ${hasAuthorization}
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
                                            ${hasAuthorization}
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
                                            ${hasAuthorization}
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
                                            ${hasAuthorization}
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

        if (service.hasAuthorization) {
            code += `refreshToken () {
                return this._httpClient.get(
                    \`\${this.BASE_URL}/auth/refresh-token\`, {
                    headers: {
                        'Authorization': \`Bearer \${sessionStorage.getItem('refreshToken')}\`
                    }
                }
                ).toPromise();
            }`
        }

        return code;
    }

    createFormService = (
        elements: Array<FormElementInterface>, 
        service: ServiceInterface
    ): string => {
        const hasAuthorization = service?.hasAuthorization ? `'Authorization': \`Bearer \${sessionStorage.getItem('token')}\`` : '';
        let selectObjectServiceCode = '';
        
        elements.forEach((object: any) => {
            for (const key in object) {
                if (Object.prototype.hasOwnProperty.call(object, key)) {
                    const element = object[key];
                    if (key === 'tabs') {
                        const tabs = object[key];
                        if (tabs) {
                            tabs.forEach((tab: any) => {
                                selectObjectServiceCode += this.createFormService(tab.elements, service);
                            });
                        }
                    }

                    if (key === 'array') {
                        const array = object[key];

                        selectObjectServiceCode += this.createFormService(array.elements, service);
                    }

                    if (key === 'select') {
                        if (element?.optionsApi) {
                            selectObjectServiceCode += `${object.select.name}SelectObjectGetAll() {
                                return this._httpClient.get(
                                    \`\${this.BASE_URL}/${element.optionsApi.endpoint}\`, {
                                    headers: {
                                        ${hasAuthorization}
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