import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const PRODUCT_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Produto',
        id: 'productForm',
        elements: [
            {
                tabs: [
                    {
                        id: 'mainTab',
                        title: 'Principal',
                        elements: [
                            {
                                select: {
                                    label: 'Tipo de produto',
                                    name: 'type',
                                    optionsObject: [
                                        {
                                            label: 'Artesanal',
                                            value: 'ARTISANAL'
                                        },
                                        {
                                            label: 'Básico',
                                            value: 'BASIC'
                                        },
                                        {
                                            label: 'Manufaturado',
                                            value: 'MANUFACTURED'
                                        },
                                        {
                                            label: 'Semimanufaturado',
                                            value: 'SEMIMANUFACTURED'
                                        }
                                    ],
                                    isRequired: true
                                }
                            },
                            {
                                input: {
                                    label: 'Nome',
                                    name: 'name',
                                    placeholder: 'Nome do produto',
                                    type: FormInputTypeEnum.Text,
                                    isRequired: true,
                                },
                            },
                            {
                                input: {
                                    label: 'Descrição',
                                    name: 'description',
                                    placeholder: 'Breve descrição do produto',
                                    type: FormInputTypeEnum.Text,
                                },
                            },
                            {
                                input: {
                                    label: 'EAN13',
                                    name: 'ean13',
                                    placeholder: 'Código EAN13 do produto',
                                    type: FormInputTypeEnum.Text,
                                },
                            }
                        ]
                    },
                    {
                        id: 'inputTab',
                        title: 'Insumos',
                        elements: [
                            {
                                select: {
                                    label: 'Produto',
                                    name: 'input',
                                    optionsApi: {
                                        endpoint: 'products',
                                        labelField: 'name',
                                        valueField: '_id'
                                    }
                                }
                            }
                        ]
                    },
                    {
                        id: 'dimensionTab',
                        title: 'Dimensões',
                        elements: [{
                            
                        }]
                    }
                ]
            },
        ],
        actions: [{
            button: {
                label: 'Criar',
                type: FormButtonTypeEnum.Submit,
                icon: 'save',
            },
        }, ],
        service: {
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app',
            endPoint: 'products',
            methods: [
                ServiceFunctionsEnum.Get,
                ServiceFunctionsEnum.Delete,
                ServiceFunctionsEnum.Save,
                ServiceFunctionsEnum.Update,
                ServiceFunctionsEnum.Find,
            ],
        },
    },
};