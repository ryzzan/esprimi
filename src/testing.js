"use strict";
exports.__esModule = true;
var index_1 = require("./index");
var projectPath = '/home/ryzzan/Projects/Kunlatek/test-esprimi';
var example_with_tabs_form_1 = require("../collections-frontend/example-with-tabs-form");
var example_table_1 = require("../collections-frontend/example-table");
var example_1 = require("../collections-frontend/example");
//////////////////////////////////////////////////////////
var main = new index_1.Main(), array = [
    example_with_tabs_form_1.EXAMPLE_WITH_TABS_FORM, example_table_1.EXAMPLE_TABLE, example_1.EXAMPLE
];
array.forEach(function (object) {
    console.log(main.setCode(object, projectPath));
});
