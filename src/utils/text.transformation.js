"use strict";
exports.__esModule = true;
exports.TextTransformation = void 0;
var pluralize = require("pluralize");
var TextTransformation = /** @class */ (function () {
    function TextTransformation() {
    }
    TextTransformation.pascalfy = function (text) {
        var pascalCase = text
            .replace(/([A-Z])/g, '$1')
            .replace(/^./, function (str) {
            return str.toUpperCase();
        });
        return pascalCase;
    };
    TextTransformation.kebabfy = function (text) {
        var kebabCase = text
            .split('')
            .map(function (letter, idx) {
            return letter.toUpperCase() === letter
                ? "" + (idx !== 0 ? '-' : '') + letter.toLowerCase()
                : letter;
        })
            .join('');
        return kebabCase;
    };
    TextTransformation.plurarize = function (text) {
        return pluralize(text);
    };
    TextTransformation.replaceKebabfyFunctionToString = function (template) {
        var _this = this;
        var regex = /\%kebabfy(.*?)%/g;
        var foundKebabfies = template.match(regex);
        var stringsToKebakfy = foundKebabfies === null || foundKebabfies === void 0 ? void 0 : foundKebabfies.join(',').replace(/\%/g, '').replace(/kebabfy/g, '').replace(/\(|\)/g, '').split(',');
        stringsToKebakfy === null || stringsToKebakfy === void 0 ? void 0 : stringsToKebakfy.forEach(function (stringToKebakfy, index) {
            var kebabfy = _this.kebabfy(stringToKebakfy);
            var foundKebabfy = ((foundKebabfies === null || foundKebabfies === void 0 ? void 0 : foundKebabfies.length) && foundKebabfies[index]) || '';
            template = template.replace(foundKebabfy, kebabfy);
        });
        return template;
    };
    TextTransformation.replacePascalfyFunctionToString = function (template) {
        var _this = this;
        var regex = /\%pascalfy(.*?)%/g;
        var foundPascalfies = template.match(regex);
        var stringsToPascalfy = foundPascalfies === null || foundPascalfies === void 0 ? void 0 : foundPascalfies.join(',').replace(/\%/g, '').replace(/pascalfy/g, '').replace(/\(|\)/g, '').split(',');
        stringsToPascalfy === null || stringsToPascalfy === void 0 ? void 0 : stringsToPascalfy.forEach(function (stringToPascalfy, index) {
            var pascalfy = _this.pascalfy(stringToPascalfy);
            var foundPascalfy = ((foundPascalfies === null || foundPascalfies === void 0 ? void 0 : foundPascalfies.length) && foundPascalfies[index]) || '';
            template = template.replace(foundPascalfy, pascalfy);
        });
        return template;
    };
    TextTransformation.replacePlurarizeFunctionToString = function (string) {
        return '';
    };
    // TO-DO: CHECK IF IT IS STILL NECESSARY
    TextTransformation.setIdToPropertyName = function (id) {
        var propertyName = '';
        var array = id.split('-');
        propertyName += array[0];
        for (var i = 0; i < array.length; i++) {
            var element = array[i];
            if (i > 0)
                propertyName += element.charAt(0).toUpperCase() + element.slice(1);
        }
        return propertyName;
    };
    TextTransformation.setIdToClassName = function (id) {
        var className = '';
        var array = id.split('-');
        className += array[0].charAt(0).toUpperCase() + array[0].slice(1);
        for (var i = 0; i < array.length; i++) {
            var element = array[i];
            if (i > 0)
                className += element.charAt(0).toUpperCase() + element.slice(1);
        }
        return className;
    };
    return TextTransformation;
}());
exports.TextTransformation = TextTransformation;
