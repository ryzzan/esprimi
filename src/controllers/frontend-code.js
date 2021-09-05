"use strict";
exports.__esModule = true;
exports.FrontendCode = void 0;
var main_1 = require("./frontend/angular/main");
var FrontendCode = /** @class */ (function () {
    function FrontendCode() {
        var _this = this;
        this.setCode = function (object) {
            switch (object.frontendFramework) {
                case 'ANGULAR':
                    return _this.codeToAngular.setCode(object);
                    break;
                case 'REACT':
                    // TO-DO
                    break;
                case 'SVELTE':
                    // TO-DO
                    break;
                case 'VUE':
                    // TO-DO
                    break;
                case 'FLUTTER':
                    // TO-DO
                    break;
                default:
                    console.info('None or unknown frontend framework chosen.');
                    return {
                        component: '',
                        service: '',
                        template: ''
                    };
                    break;
            }
        };
        this.codeToAngular = new main_1.CodeToAngular;
    }
    return FrontendCode;
}());
exports.FrontendCode = FrontendCode;
