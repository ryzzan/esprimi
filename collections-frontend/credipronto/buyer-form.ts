import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const BUYER_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Compradores',
        id: 'buyerForm',
        elements: [
            {
                array: {
                    title: 'Comprador',
                    id: 'compradores',
                    elements: [
                        {
                            tabs: [
                            {
                                id: 'pessoal',
                                title: 'Dados pessoais',
                                elements: [{
                                    select: {
                                        label: 'Nacionalidade',
                                        name: 'nacionalidade',
                                        optionsApi: {
                                            endpoint: 'crm/auxlist/get/nacionalidade_list',
                                            labelField: 'name',
                                            valueField: 'id'
                                        }
                                    },
                                },
                                {
                                    input: {
                                        label: 'Nome',
                                        name: 'nome',
                                        placeholder: 'Nome do comprador',
                                        type: FormInputTypeEnum.Text,
                                        isRequired: true,
                                    },
                                },
                                {
                                    input: {
                                        label: 'CPF',
                                        name: 'cpf',
                                        placeholder: 'CPF do comprador',
                                        type: FormInputTypeEnum.Text,
                                    },
                                },
                                {
                                    input: {
                                        label: 'Data de nascimento',
                                        name: 'data_nascimento',
                                        placeholder: 'Nascimento do comprador',
                                        type: FormInputTypeEnum.Date,
                                    },
                                },
                                {
                                    select: {
                                        label: 'G??nero',
                                        name: 'sexo',
                                        optionsApi: {
                                            endpoint: 'crm/auxlist/get/contact_sexo_list',
                                            labelField: 'name',
                                            valueField: 'id'
                                        }
                                    },
                                },
                                {
                                    select: {
                                        label: 'Estado civil',
                                        name: 'estado_civil',
                                        optionsApi: {
                                            endpoint: 'crm/auxlist/get/estado_civil_list',
                                            labelField: 'name',
                                            valueField: 'id'
                                        }
                                    },
                                },
                                {
                                    select: {
                                        label: 'Uni??o est??vel',
                                        name: 'uniao_estavel',
                                        optionsApi: {
                                            endpoint: 'crm/auxlist/get/true_false',
                                            labelField: 'name',
                                            valueField: 'id'
                                        }
                                    },
                                },
                                {
                                    input: {
                                        label: 'Nome do c??njuge',
                                        name: 'conjuge_nome',
                                        placeholder: 'Nome do c??njuge do comprador',
                                        type: FormInputTypeEnum.Text,
                                    },
                                },
                                {
                                    input: {
                                        label: 'CPF do c??njuge',
                                        name: 'conjuge_cpf',
                                        placeholder: 'CPF do c??njuge do comprador',
                                        type: FormInputTypeEnum.Text,
                                    },
                                },
                                {
                                    input: {
                                        label: 'Nascimento do c??njuge',
                                        name: 'conjuge_data_nascimento',
                                        placeholder: 'Nascimento do c??njuge do comprador',
                                        type: FormInputTypeEnum.Date,
                                    },
                                },
                                ]
                            }, 
                            {
                                id: 'contato',
                                title: 'Endere??o',
                                elements: [
                                    {
                                        input: {
                                            label: 'CEP',
                                            name: 'cep',
                                            placeholder: 'CEP atual do comprador',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Endere??o',
                                            name: 'endere??o',
                                            placeholder: 'Endere??o atual do comprador',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'N??mero',
                                            name: 'numero',
                                            placeholder: 'N??mero do endere??o',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Complemento',
                                            name: 'complemento',
                                            placeholder: 'Complemento do endere??o',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Bairro',
                                            name: 'bairro',
                                            placeholder: 'Bairro do endere??o',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Cidade',
                                            name: 'cidade',
                                            placeholder: 'Cidade do endere??o',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Estado',
                                            name: 'estado',
                                            placeholder: 'Estado do endere??o',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    }
                                ]
                            },
                            {
                                id: 'financeiro',
                                title: 'Dados financeiros',
                                elements: [
                                    {
                                        input: {
                                            label: 'Profiss??o',
                                            name: 'profissao',
                                            placeholder: 'Profiss??o do comprador',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Empresa',
                                            name: 'empresa',
                                            placeholder: 'Empresa na qual o comprador atua',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Data de admiss??o',
                                            name: 'data_admissao',
                                            placeholder: 'Data de admiss??o na empresa em que atua',
                                            type: FormInputTypeEnum.Date,
                                        },
                                    },
                                    {
                                        select: {
                                            label: 'Fonte de renda',
                                            name: 'fonte_renda',
                                            optionsObject: [
                                                {
                                                    label: 'Assalariado',
                                                    value: '114',
                                                },
                                                {
                                                    label: 'Aposentado/Pensionista',
                                                    value: '115',
                                                },
                                                {
                                                    label: 'Aut??nomo',
                                                    value: '116',
                                                },
                                                {
                                                    label: 'Profissional liberal',
                                                    value: '117',
                                                },
                                                {
                                                    label: 'S??cio propriet??rio',
                                                    value: '118',
                                                },
                                            ]
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'CNPJ',
                                            name: 'cnpj',
                                            placeholder: 'CNPJ da empresa em que atua',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Renda mensal l??quida',
                                            name: 'renda_mensal_liquida',
                                            placeholder: 'Renda mensal l??quida do comprador',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    }
                                ]
                            }
                        ]
                            ,
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
            hasAuthorization: true,
            baseUrl: 'https://api.credipronto.com.br',
            endPoint: 'buyers',
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