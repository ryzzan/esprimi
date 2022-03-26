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
                                select: {
                                    label: 'Grupos de produto',
                                    name: 'groups',
                                    optionsApi: {
                                        endpoint: 'group',
                                        labelField: 'name',
                                        valueField: '_id'
                                    },
                                    isMultiple: true,
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
                                    label: 'Modelo',
                                    name: 'model',
                                    placeholder: 'Modelo do produto',
                                    type: FormInputTypeEnum.Text,
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
                            },
                            {
                                select: {
                                    label: 'NCM',
                                    name: 'ncm',
                                    optionsApi: {
                                        endpoint: 'ncm',
                                        labelField: 'name',
                                        valueField: '_id'
                                    },
                                    isRequired: true
                                }
                            },
                            {
                                select: {
                                    label: 'Unidade de medida',
                                    name: 'unitOfMeasurement',
                                    optionsObject: [{
                                        label: 'Centímetro',
                                        value: 'cm'
                                    }, {
                                        label: 'Gramas',
                                        value: 'g'
                                    }, {
                                        label: 'Litro',
                                        value: 'l'
                                    }, {
                                        label: 'Miligramas',
                                        value: 'mg'
                                    }, {
                                        label: 'Mililitro',
                                        value: 'ml'
                                    }, {
                                        label: 'Metro',
                                        value: 'm'
                                    }, {
                                        label: 'Milímetro',
                                        value: 'mm'
                                    }, {
                                        label: 'Quilograma',
                                        value: 'kg'
                                    }, {
                                        label: 'Unidade',
                                        value: 'un'
                                    }],
                                    isRequired: true
                                }
                            }
                        ]
                    },
                    {
                        id: 'inputTab',
                        title: 'Insumos',
                        elements: [
                            {
                                array: {
                                    title: 'Insumo',
                                    id: 'inputArray',
                                    elements: [
                                        {
                                            select: {
                                                label: 'Produto',
                                                name: 'input',
                                                optionsApi: {
                                                    endpoint: 'product',
                                                    labelField: 'name',
                                                    valueField: '_id'
                                                }
                                            }
                                        },
                                        {
                                            input: {
                                                label: 'Quantidade',
                                                name: 'inputQuantity',
                                                placeholder: 'De acordo com a unidade de media padrão',
                                                type: FormInputTypeEnum.Number,
                                            }
                                        }
                                    ]
                                }
                            },
                        ]
                    },
                    {
                        id: 'dimensionTab',
                        title: 'Dimensões para armazenamento',
                        elements: [
                            {
                                input: {
                                    label: 'Altura',
                                    name: 'height',
                                    placeholder: 'Altura considerando embalagem',
                                    type: FormInputTypeEnum.Number
                                }
                            },
                            {
                                select: {
                                    label: 'Unidade de medida da altura',
                                    name: 'heightUnitOfMeasurement',
                                    optionsObject: [
                                        {
                                            label: 'Centímetro',
                                            value: 'cm'
                                        },
                                        {
                                            label: 'Metro',
                                            value: 'm'
                                        },
                                        {
                                            label: 'Milímetro',
                                            value: 'mm'
                                        }
                                    ]
                                }
                            },
                            {
                                input: {
                                    label: 'Largura',
                                    name: 'width',
                                    placeholder: 'Largura considerando embalagem',
                                    type: FormInputTypeEnum.Number
                                }
                            },
                            {
                                select: {
                                    label: 'Unidade de medida da largura',
                                    name: 'widthUnitOfMeasurement',
                                    optionsObject: [
                                        {
                                            label: 'Centímetro',
                                            value: 'cm'
                                        },
                                        {
                                            label: 'Metro',
                                            value: 'm'
                                        },
                                        {
                                            label: 'Milímetro',
                                            value: 'mm'
                                        },
                                        {
                                            label: 'Quilômetro',
                                            value: 'km'
                                        }
                                    ]
                                }
                            },
                            {
                                input: {
                                    label: 'Profundidade',
                                    name: 'depth',
                                    placeholder: 'Profundidade considerando embalagem',
                                    type: FormInputTypeEnum.Number
                                }
                            },
                            {
                                select: {
                                    label: 'Unidade de medida da profundidade',
                                    name: 'depthUnitOfMeasurement',
                                    optionsObject: [
                                        {
                                            label: 'Centímetro',
                                            value: 'cm'
                                        },
                                        {
                                            label: 'Metro',
                                            value: 'm'
                                        },
                                        {
                                            label: 'Milímetro',
                                            value: 'mm'
                                        },
                                        {
                                            label: 'Quilômetro',
                                            value: 'km'
                                        }
                                    ]
                                }
                            }
                        ]
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
            hasAuthorization: true,
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