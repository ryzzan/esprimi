"use strict";
exports.__esModule = true;
exports.CodeToAngularComponent = void 0;
var main_1 = require("./form/main");
var CodeToAngularComponent = /** @class */ (function () {
    function CodeToAngularComponent() {
        var _this = this;
        this.customComponentFormCode = new main_1.CodeToAngularFormComponent;
        this.setComponentCode = function (projectName, object) {
            var componentSkeletonCode = "\n                                import { Component, OnInit } from '@angular/core';\n                                %IMPORTS%\n\n                                @Component({\n                                    selector: 'app-%kebabfy(" + projectName + ")%',\n                                    templateUrl: './%kebabfy(" + projectName + ")%.component.html',\n                                    styleUrls: ['./%kebabfy(" + projectName + ")%.component.sass']\n                                })\n                                export class %pascalfy(" + projectName + ")%Component implements OnInit {\n                                    %PROPERTIES%\n\n                                    constructor(%DEPENDENCIES%) {\n                                        %CONSTRUCTOR%\n                                    }\n\n                                    ngOnInit(): void {\n                                    }\n\n                                    %METHODS%\n                                }\n                                ";
            var code = componentSkeletonCode;
            if (object.form) {
                var componentImportCode = _this.customComponentFormCode.setImport(object);
                code.replace('%IMPORTS%', componentSkeletonCode);
                var componentPropertyCode = _this.customComponentFormCode.setProperty(object);
                code.replace('%PROPERTIES%', componentImportCode);
                var componentConstructorCode = _this.customComponentFormCode.setConstructor(object);
                code.replace('%CONSTRUCTOR%', componentPropertyCode);
                var componentActionCode = _this.customComponentFormCode.setMethod(object);
                code.replace('%METHODS%', componentConstructorCode);
            }
            if (object.table) {
                // this.customComponentTableCode(object);
            }
            return code;
        };
        // private customComponentFormCode = (object: MainInterface, projectName: string): string => {
        // }
        // private customComponentTableCode = (object: MainInterface, projectName: string): string => {
        // }
    }
    return CodeToAngularComponent;
}());
exports.CodeToAngularComponent = CodeToAngularComponent;
