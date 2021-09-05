"use strict";
exports.__esModule = true;
exports.Main = void 0;
var frontend_code_1 = require("./controllers/frontend-code");
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.frontendCode = new frontend_code_1.FrontendCode;
        this.setCode = function (object, projectPath) {
            if (object.frontendFramework) {
                try {
                    var code = _this.frontendCode.setCode(object);
                    console.info(code);
                    // if (projectPath) {
                    //     this.setArchitecture(code, object, projectPath);
                    // }
                }
                catch (error) {
                    return error;
                }
            }
        };
        this.setArchitecture = function (code, object, projectPath) {
            object['projectPath'] = projectPath;
        };
    }
    return Main;
}());
exports.Main = Main;
