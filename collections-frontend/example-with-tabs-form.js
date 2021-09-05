"use strict";
exports.__esModule = true;
exports.EXAMPLE_WITH_TABS_FORM = void 0;
var form_1 = require("../src/enums/form");
var main_1 = require("../src/enums/main");
exports.EXAMPLE_WITH_TABS_FORM = {
    frontendFramework: main_1.FrontendFrameworkEnum.Angular,
    form: {
        title: 'Título exemplo',
        id: 'exampleForm',
        elements: [
            {
                tabs: [
                    {
                        title: 'Título exemplo',
                        elements: [
                            {
                                input: {
                                    label: 'Um input',
                                    name: 'oneInput',
                                    placeholder: 'Placeholder prum input',
                                    type: form_1.FormInputTypeEnum.Text,
                                    isRequired: true
                                }
                            },
                            {
                                select: {
                                    label: 'Um select',
                                    name: 'oneSelect',
                                    optionsObject: [
                                        {
                                            label: 'Opção 1',
                                            value: 'option1'
                                        },
                                        {
                                            label: 'Opção 2',
                                            value: 'option2'
                                        },
                                    ]
                                }
                            },
                            {
                                slide: {
                                    label: 'Um slide',
                                    name: 'oneSlide',
                                    placeholder: 'Placeholder prum slide',
                                    type: form_1.FormInputTypeEnum.Text
                                }
                            },
                        ],
                        id: 'exampleTab',
                        label: 'Rótulo exemplo'
                    },
                    {
                        title: 'Outro título',
                        elements: [
                            {
                                array: {
                                    title: 'Exemplo de array',
                                    elements: [
                                        {
                                            select: {
                                                label: 'Outro select',
                                                name: 'otherSelect',
                                                optionsObject: [
                                                    {
                                                        label: 'Opção 1',
                                                        value: 'option1'
                                                    },
                                                    {
                                                        label: 'Opção 2',
                                                        value: 'option2'
                                                    },
                                                    {
                                                        label: 'Opção 3',
                                                        value: 'option3'
                                                    },
                                                ]
                                            }
                                        },
                                        {
                                            input: {
                                                label: 'Outro input',
                                                name: 'otherInput',
                                                placeholder: 'Placeholder pra outro input',
                                                type: form_1.FormInputTypeEnum.Text
                                            }
                                        },
                                        {
                                            slide: {
                                                label: 'Outro slide',
                                                name: 'otherSlide',
                                                placeholder: 'Placeholder pra outro slide',
                                                type: form_1.FormInputTypeEnum.Text
                                            }
                                        },
                                    ],
                                    id: 'exampleArray'
                                }
                            },
                        ],
                        id: 'exampleOtherTab',
                        label: 'Outro rótulo'
                    },
                ]
            },
        ],
        actions: [
            {
                button: {
                    label: 'Criar',
                    type: form_1.FormButtonTypeEnum.Submit,
                    icon: 'save'
                }
            },
        ],
        service: {
            baseUrl: 'http://localhost:3000',
            endPoint: 'examples',
            methods: [
                form_1.ServiceFunctionsEnum.Get,
                form_1.ServiceFunctionsEnum.Delete,
                form_1.ServiceFunctionsEnum.Save,
                form_1.ServiceFunctionsEnum.Update,
                form_1.ServiceFunctionsEnum.Find,
            ]
        }
    }
};
