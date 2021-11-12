// Interfaces
import { MainInterface } from "../../../../interfaces/main";
import { CodeToAngularModuleImport } from "./import";
import { CodeToAngularModuleDeclaration } from "./module-declaration";

export class CodeToAngularModule {
    createModuleCode = (
        projectName: string, 
        object: MainInterface
    ): string => {

        const moduleSkeletonCode = `
                                    import { NgModule } from '@angular/core';
                                    import { CommonModule } from '@angular/common';

                                    import { %pascalfy(${projectName})%RoutingModule } from './%kebabfy(${projectName})%-routing.module';
                                    import { %pascalfy(${projectName})%Component } from './%kebabfy(${projectName})%.component';
                                    %IMPORTS%
                                    
                                    @NgModule({
                                      declarations: [
                                        %pascalfy(${projectName})%Component,
                                        %DECLARATIONS%
                                      ],
                                      imports: [
                                        CommonModule,
                                        %pascalfy(${projectName})%RoutingModule,
                                        SharedModule
                                      ]
                                    })
                                    export class %pascalfy(${projectName})%Module { }
                                    `;
        let code = moduleSkeletonCode;

        const moduleImportCode = CodeToAngularModuleImport.createModuleImports(object);
        code = code.replace('%IMPORTS%', moduleImportCode);

        const moduleDeclarationCode = CodeToAngularModuleDeclaration.createModuleDeclarations(object);
        code = code.replace('%DECLARATIONS%', moduleImportCode);

        return code;
    }
}