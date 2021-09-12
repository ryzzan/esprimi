// Interfaces
import { MainInterface } from "../../../../interfaces/main";
import { ServiceInterface } from "../../../../interfaces/form";

// Utils
import { TextTransformation } from "../../../../utils/text.transformation";

export class CodeToAngularService {
    createServiceCode = (projectName: string, object: MainInterface): string => {
        const componentSkeletonCode = `
                                    import { HttpClient } from '@angular/common/http';
                                    import { Injectable } from '@angular/core';
                            
                                    @Injectable({
                                    providedIn: 'root',
                                    })
                                    export class %pascalfy(${projectName})%Service {
                                        BASE_URL = %BASE_URL%;

                                        constructor(private _httpClient: HttpClient) {}

                                        %SERVICES%
                                    }
                                    `;

        let code = componentSkeletonCode;

        if (object.form?.service) {
            const serviceCode = this.createService(projectName, object.form.service);
            
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

    createService = (projectName: string, service: ServiceInterface) => {
        const array = service.methods;
        let code = '';
        array.forEach(element => {
            switch (element) {
                case 'get':
                    code += `
                            getAll() {
                                return this._httpClient.get(
                                    \`\${this.BASE_URL}/%pluralize${projectName}%\`, {
                                    headers: {
                                        'Authorization': \`Bearer \${localStorage.getItem('token')}\`
                                    }
                                }
                                ).toPromise();
                            }
                            `;
                    break;
                
                case 'find':
                    code += `
                            find(id: string) {
                                return this._httpClient.get(
                                    \`\${this.BASE_URL}/%pluralize${projectName}%/\${id}\`,
                                    {
                                        headers: {
                                            'Authorization': \`Bearer \${localStorage.getItem('token')}\`
                                        }
                                    }
                                ).toPromise();
                            }
                            `;
                    break;

                case 'save':
                    code += `
                            save(body: any) {
                                return this._httpClient.post(
                                \`\${this.BASE_URL}/%pluralize${projectName}%\`, 
                                body,
                                {
                                    headers: {
                                        'Authorization': \`Bearer \${localStorage.getItem('token')}\`
                                    }
                                }
                                ).toPromise();
                            }
                            `;
                    break;
                
                case 'update':
                    code += `
                            update(body: any, id: string) {
                                return this._httpClient.put(
                                    \`\${this.BASE_URL}/%pluralize${projectName}%/\${id}\`, 
                                    body,
                                    {
                                        headers: {
                                            'Authorization': \`Bearer \${localStorage.getItem('token')}\`
                                        }
                                    }
                                ).toPromise();
                            }
                            `;
                    break;

                case 'delete':
                    code += `
                            delete(id: string) {
                                return this._httpClient.delete(
                                    \`\${this.BASE_URL}/%pluralize${projectName}%/\${id}\`,
                                    {
                                        headers: {
                                            'Authorization': \`Bearer \${localStorage.getItem('token')}\`
                                        }
                                    }
                                ).toPromise();
                            }
                            `;
                    break;
                
                case 'softDelete':
                    code += `
                            softDelete(id: string) {
                                return this._httpClient.product(
                                    \`\${this.BASE_URL}/%pluralize${projectName}%/\${id}\`,
                                    {
                                        headers: {
                                            'Authorization': \`Bearer \${localStorage.getItem('token')}\`
                                        }
                                    }
                                ).toPromise();
                            }
                            `;
                    break;
            
                default:
                    code += ``;
                    break;
            }
        });

        return code;
    }
}