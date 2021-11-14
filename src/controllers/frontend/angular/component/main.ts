import {
    MainInterface
} from "../../../../interfaces/main";
import { TextTransformation } from "../../../../utils/text.transformation";
import {
    CodeToAngularFormComponent
} from "./form/main";
import { 
    CodeToAngularTableComponent
} from "./table/main";

export class CodeToAngularComponent {
    customComponentFormCode = new CodeToAngularFormComponent;
    customComponentTableCode = new CodeToAngularTableComponent;

    createComponentCode = async (
        projectName: string, 
        object: MainInterface
    ): Promise<string> => {
        const componentSkeletonCode = `
                                    import { Component, OnInit } from '@angular/core';
                                    %IMPORTS%

                                    @Component({
                                        selector: 'app-%kebabfy(${projectName})%',
                                        templateUrl: './%kebabfy(${projectName})%.component.html',
                                        styleUrls: ['./%kebabfy(${projectName})%.component.sass']
                                    })
                                    export class %pascalfy(${projectName})%Component implements OnInit {
                                        %PROPERTIES%

                                        constructor(%DEPENDENCIES%) {
                                            %CONSTRUCTOR%
                                        }

                                        ngOnInit(): void {
                                        }

                                        %METHODS%
                                    }
                                    `;

        let code = componentSkeletonCode;

        if (object.form) {
            const componentImportCode = this.customComponentFormCode.createImport(object);
            code = code.replace('%IMPORTS%', componentImportCode);
            
            const componentPropertyCode = this.customComponentFormCode.createProperty(object);
            code = code.replace('%PROPERTIES%', componentPropertyCode);

            const componentConstructorArgCode = this.customComponentFormCode.createConstructorArg(object);
            code = code.replace('%CONSTRUCTOR%', componentConstructorArgCode);

            const componentConstructorParamCode = this.customComponentFormCode.createConstructorParams(object);
            code = code.replace('%DEPENDENCIES%', componentConstructorParamCode);

            const componentActionCode = this.customComponentFormCode.createMethod(object);
            code = code.replace('%METHODS%', componentActionCode);
        }

        if (object.table) {
            const componentImportCode = this.customComponentTableCode.createImport(object);
            code = code.replace('%IMPORTS%', componentImportCode);
            
            const componentPropertyCode = this.customComponentTableCode.createProperty(object);
            code = code.replace('%PROPERTIES%', componentPropertyCode);

            const componentConstructorArgCode = this.customComponentTableCode.createConstructorArg(object);
            code = code.replace('%CONSTRUCTOR%', componentConstructorArgCode);

            const componentConstructorParamCode = this.customComponentTableCode.createConstructorParams(object);
            code = code.replace('%DEPENDENCIES%', componentConstructorParamCode);

            const componentActionCode = this.customComponentTableCode.createMethod(object);
            code = code.replace('%METHODS%', componentActionCode);
        }

        if (object.module) {
            
        }

        code = TextTransformation.replaceKebabfyFunctionToString(code);
        code = TextTransformation.replacePascalfyFunctionToString(code);
        
        return code;
    }
}