import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const OUTPUT_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Saída',
        id: 'outputForm',
        elements: [
            {
                select: {
                    label: 'Tipo',
                    name: 'outputType',
                    optionsObject: [
                        {
                            label: 'Atividade financeira',
                            value: 'finance'
                        },
                        {
                            label: 'Investimento',
                            value: 'investiment'
                        },
                        {
                            label: 'Produtos',
                            value: 'productOperation'
                        },
                        {
                            label: 'Serviços',
                            value: 'serviceOperation'
                        }
                    ]
                }
            },
            {
                input: {
                    label: 'CPF ou CNPJ',
                    name: 'outputUniqueId',
                    placeholder: 'Documento do pagante',
                    type: FormInputTypeEnum.Text,
                    todo: 'run cpfcnpj API on focus out',
                }
            },
            {
                input: {
                    label: 'Nota de produto',
                    name: 'productInvoice',
                    placeholder: 'Código da nota de produto',
                    type: FormInputTypeEnum.Text,
                    condition: 'type === productOperation',
                    todo: 'run product invoice API on focus out',
                }
            },
            {
                input: {
                    label: 'Nota de serviço',
                    name: 'serviceInvoice',
                    placeholder: 'Código da nota de produto',
                    type: FormInputTypeEnum.Text,
                    condition: 'type === serviceOperation',
                    todo: 'run service invoice API on focus out',
                }
            },
            {
                input: {
                    label: 'Data',
                    name: 'outputDate',
                    placeholder: 'Data da saída',
                    type: FormInputTypeEnum.Date,
                }
            },
            {
                array: {
                    id: 'productInputArray',
                    title: 'Produto',
                    todo: 'condition to type === productOperation && productIvoice === ""',
                    elements: [
                        {
                            select: {
                                label: 'Código',
                                name: 'productId',
                                optionsApi: {
                                    endpoint: 'products',
                                    labelField: 'Código | Nome do serviço',
                                    valueField: 'productId'
                                },
                                isRequired: true,
                            }
                        },
                        {
                            input: {
                                label: 'Preço',
                                name: 'productPrice',
                                placeholder: 'Preço do serviço',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                todo: 'set mask to price. set validator to only number. must create an enum of validators. must create mask attribute with enum of masks'
                            }
                        }
                    ]
                }
            },
            {
                array: {
                    id: 'serviceInputArray',
                    title: 'Serviço',
                    todo: 'condition to type === serviceOperation && serviceIvoice === ""',
                    elements: [
                        {
                            select: {
                                label: 'Código',
                                name: 'serviceId',
                                optionsApi: {
                                    endpoint: 'services',
                                    labelField: 'Código | Nome do serviço',
                                    valueField: 'serviceId'
                                },
                                isRequired: true,
                            }
                        },
                        {
                            input: {
                                label: 'Preço',
                                name: 'servicePrice',
                                placeholder: 'Preço do serviço',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                todo: 'set mask to price. set validator to only number. must create an enum of validators. must create mask attribute with enum of masks'
                            }
                        }
                    ]
                }
            },
            {
                array: {
                    id: 'investimentInputArray',
                    title: 'Investimento',
                    todo: 'condition to type === investimentOperation && investimentIvoice === ""',
                    elements: [
                        {
                            select: {
                                label: 'Código',
                                name: 'investimentId',
                                optionsApi: {
                                    endpoint: 'investiments',
                                    labelField: 'Código | Nome do investimento',
                                    valueField: 'investimentId'
                                },
                                isRequired: true,
                            }
                        },
                        {
                            input: {
                                label: 'Preço',
                                name: 'investimentPrice',
                                placeholder: 'Preço do investimento',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                todo: 'set mask to price. set validator to only number. must create an enum of validators. must create mask attribute with enum of masks'
                            }
                        }
                    ]
                }
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
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app0',
            endPoint: 'outputs',
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