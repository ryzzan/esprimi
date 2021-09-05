"use strict";
exports.__esModule = true;
exports.ActionVerbEnum = exports.RequestTypeEnum = exports.FilterLogicalOperatorEnum = exports.FilterComparisonOperatorEnum = exports.FilterTypeEnum = void 0;
var FilterTypeEnum;
(function (FilterTypeEnum) {
    FilterTypeEnum["Api"] = "API";
    FilterTypeEnum["Object"] = "OBJECT";
})(FilterTypeEnum = exports.FilterTypeEnum || (exports.FilterTypeEnum = {}));
var FilterComparisonOperatorEnum;
(function (FilterComparisonOperatorEnum) {
    FilterComparisonOperatorEnum["Equal"] = "eq";
    FilterComparisonOperatorEnum["Greater"] = "gt";
    FilterComparisonOperatorEnum["GreaterOrEqual"] = "gte";
    FilterComparisonOperatorEnum["InArray"] = "in";
    FilterComparisonOperatorEnum["Less"] = "lt";
    FilterComparisonOperatorEnum["LessOrEqual"] = "lte";
    FilterComparisonOperatorEnum["NotEqual"] = "ne";
    FilterComparisonOperatorEnum["NotInArray"] = "nin";
})(FilterComparisonOperatorEnum = exports.FilterComparisonOperatorEnum || (exports.FilterComparisonOperatorEnum = {}));
var FilterLogicalOperatorEnum;
(function (FilterLogicalOperatorEnum) {
    FilterLogicalOperatorEnum["And"] = "and";
    FilterLogicalOperatorEnum["Not"] = "not";
    FilterLogicalOperatorEnum["Nor"] = "nor";
    FilterLogicalOperatorEnum["Or"] = "or";
})(FilterLogicalOperatorEnum = exports.FilterLogicalOperatorEnum || (exports.FilterLogicalOperatorEnum = {}));
var RequestTypeEnum;
(function (RequestTypeEnum) {
    RequestTypeEnum["Api"] = "API";
    RequestTypeEnum["Object"] = "OBJECT";
    RequestTypeEnum["Link"] = "LINK";
    RequestTypeEnum["Dialog"] = "DIALOG";
})(RequestTypeEnum = exports.RequestTypeEnum || (exports.RequestTypeEnum = {}));
var ActionVerbEnum;
(function (ActionVerbEnum) {
    ActionVerbEnum["Post"] = "POST";
    ActionVerbEnum["Get"] = "GET";
    ActionVerbEnum["Patch"] = "PATCH";
    ActionVerbEnum["Put"] = "PUT";
    ActionVerbEnum["Delete"] = "DELETE";
})(ActionVerbEnum = exports.ActionVerbEnum || (exports.ActionVerbEnum = {}));
