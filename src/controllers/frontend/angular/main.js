"use strict";
exports.__esModule = true;
exports.CodeToAngular = void 0;
var main_1 = require("./component/main");
var CodeToAngular = /** @class */ (function () {
    function CodeToAngular() {
        var _this = this;
        this.component = new main_1.CodeToAngularComponent;
        this.setCode = function (object) {
            _this.projectName = _this.setProjectName(object);
            var component = _this.component.setComponentCode(_this.projectName, object);
            return {
                component: component,
                service: '',
                template: ''
            };
        };
        this.setProjectName = function (object) {
            if (object.form)
                return object.form.id;
            if (object.table)
                return object.table.id;
        };
    }
    return CodeToAngular;
}());
exports.CodeToAngular = CodeToAngular;
