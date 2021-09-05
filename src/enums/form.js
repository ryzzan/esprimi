"use strict";
exports.__esModule = true;
exports.ServiceFunctionsEnum = exports.FormTargetEnum = exports.FormMethodEnum = exports.FormEncTypeEnum = exports.FormButtonTypeEnum = exports.FormInputTypeEnum = exports.FormAttributeEnum = void 0;
var FormAttributeEnum;
(function (FormAttributeEnum) {
    FormAttributeEnum["AcceptCharset"] = "accept-charset";
    FormAttributeEnum["Action"] = "action";
    FormAttributeEnum["Autocomplete"] = "autocomplete";
    FormAttributeEnum["Enctype"] = "enctype";
    FormAttributeEnum["Method"] = "method";
    FormAttributeEnum["Name"] = "name";
    FormAttributeEnum["Novalidate"] = "novalidate";
    FormAttributeEnum["Rel"] = "rel";
    FormAttributeEnum["Target"] = "target";
})(FormAttributeEnum = exports.FormAttributeEnum || (exports.FormAttributeEnum = {}));
var FormInputTypeEnum;
(function (FormInputTypeEnum) {
    FormInputTypeEnum["Button"] = "button";
    FormInputTypeEnum["Checkbox"] = "checkbox";
    FormInputTypeEnum["Color"] = "color";
    FormInputTypeEnum["Date"] = "date";
    FormInputTypeEnum["DatetimeLocal"] = "datetime-local";
    FormInputTypeEnum["Email"] = "email";
    FormInputTypeEnum["File"] = "file";
    FormInputTypeEnum["Hidden"] = "hidden";
    FormInputTypeEnum["Image"] = "image";
    FormInputTypeEnum["Month"] = "month";
    FormInputTypeEnum["Number"] = "number";
    FormInputTypeEnum["Password"] = "password";
    FormInputTypeEnum["Radio"] = "radio";
    FormInputTypeEnum["Range"] = "range";
    FormInputTypeEnum["Reset"] = "reset";
    FormInputTypeEnum["Search"] = "search";
    FormInputTypeEnum["Submit"] = "submit";
    FormInputTypeEnum["Tel"] = "tel";
    FormInputTypeEnum["Text"] = "text";
    FormInputTypeEnum["Time"] = "time";
    FormInputTypeEnum["Url"] = "url";
    FormInputTypeEnum["Week"] = "week";
})(FormInputTypeEnum = exports.FormInputTypeEnum || (exports.FormInputTypeEnum = {}));
var FormButtonTypeEnum;
(function (FormButtonTypeEnum) {
    FormButtonTypeEnum["Button"] = "button";
    FormButtonTypeEnum["Reset"] = "reset";
    FormButtonTypeEnum["Submit"] = "submit";
    FormButtonTypeEnum["Delete"] = "delete";
})(FormButtonTypeEnum = exports.FormButtonTypeEnum || (exports.FormButtonTypeEnum = {}));
var FormEncTypeEnum;
(function (FormEncTypeEnum) {
    FormEncTypeEnum["Application"] = "application/x-www-form-urlencoded";
    FormEncTypeEnum["Mutipart"] = "multipart/form-data";
    FormEncTypeEnum["Text"] = "text/plain";
})(FormEncTypeEnum = exports.FormEncTypeEnum || (exports.FormEncTypeEnum = {}));
var FormMethodEnum;
(function (FormMethodEnum) {
    FormMethodEnum["Get"] = "get";
    FormMethodEnum["Post"] = "post";
})(FormMethodEnum = exports.FormMethodEnum || (exports.FormMethodEnum = {}));
var FormTargetEnum;
(function (FormTargetEnum) {
    FormTargetEnum["Blank"] = "_blank";
    FormTargetEnum["Self"] = "_self";
    FormTargetEnum["Parent"] = "_parent";
    FormTargetEnum["Top"] = "_top";
})(FormTargetEnum = exports.FormTargetEnum || (exports.FormTargetEnum = {}));
var ServiceFunctionsEnum;
(function (ServiceFunctionsEnum) {
    ServiceFunctionsEnum["Get"] = "get";
    ServiceFunctionsEnum["Find"] = "find";
    ServiceFunctionsEnum["Save"] = "save";
    ServiceFunctionsEnum["Update"] = "update";
    ServiceFunctionsEnum["Delete"] = "delete";
    ServiceFunctionsEnum["SoftDelete"] = "softDelete";
})(ServiceFunctionsEnum = exports.ServiceFunctionsEnum || (exports.ServiceFunctionsEnum = {}));
