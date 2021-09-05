"use strict";
exports.__esModule = true;
exports.EXAMPLE_TABLE = void 0;
var form_1 = require("../src/enums/form");
var main_1 = require("../src/enums/main");
var request_1 = require("../src/enums/request");
exports.EXAMPLE_TABLE = {
    frontendFramework: main_1.FrontendFrameworkEnum.Angular,
    table: {
        id: 'exampleTable',
        title: 'Exemplos',
        data: {
            type: request_1.RequestTypeEnum.Object
        },
        elements: [
            {
                column: {
                    label: 'Input'
                },
                row: {
                    type: 'string',
                    field: 'oneInput'
                }
            },
            {
                column: {
                    label: 'Select'
                },
                row: {
                    type: 'date',
                    field: 'oneSelect'
                }
            },
            {
                column: {
                    label: 'Ações'
                },
                row: {
                    type: 'menu',
                    icon: 'more_vert',
                    menu: [
                        {
                            action: {
                                type: request_1.RequestTypeEnum.Link,
                                url: '/main/example/123'
                            },
                            label: 'Editar'
                        },
                        {
                            action: {
                                type: request_1.RequestTypeEnum.Dialog
                            },
                            label: 'Remover',
                            dialog: {
                                templateFolder: 'remove-confirmation-dialog',
                                id: 'removeConfirmationDialog'
                            }
                        },
                    ]
                }
            },
        ],
        actions: {
            id: 'exampleTable',
            title: 'Exemplo',
            elements: [{
                    input: {
                        label: 'Search input',
                        name: 'searchInput',
                        placeholder: 'Placeholder to search input',
                        type: form_1.FormInputTypeEnum.Text
                    }
                }]
        },
        service: {
            baseUrl: 'localhost:3000',
            endPoint: 'examples',
            methods: [
                form_1.ServiceFunctionsEnum.Get,
                form_1.ServiceFunctionsEnum.Delete,
                form_1.ServiceFunctionsEnum.Update,
                form_1.ServiceFunctionsEnum.Find,
            ]
        }
    }
};
