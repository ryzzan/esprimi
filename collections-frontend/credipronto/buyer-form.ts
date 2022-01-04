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
                                        label: 'Gênero',
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
                                        label: 'União estável',
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
                                        label: 'Nome do cônjuge',
                                        name: 'conjuge_nome',
                                        placeholder: 'Nome do cônjuge do comprador',
                                        type: FormInputTypeEnum.Text,
                                    },
                                },
                                {
                                    input: {
                                        label: 'CPF do cônjuge',
                                        name: 'conjuge_cpf',
                                        placeholder: 'CPF do cônjuge do comprador',
                                        type: FormInputTypeEnum.Text,
                                    },
                                },
                                {
                                    input: {
                                        label: 'Nascimento do cônjuge',
                                        name: 'conjuge_data_nascimento',
                                        placeholder: 'Nascimento do cônjuge do comprador',
                                        type: FormInputTypeEnum.Date,
                                    },
                                },
                                ]
                            }, 
                            {
                                id: 'contato',
                                title: 'Endereço',
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
                                            label: 'Endereço',
                                            name: 'endereço',
                                            placeholder: 'Endereço atual do comprador',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Número',
                                            name: 'numero',
                                            placeholder: 'Número do endereço',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Complemento',
                                            name: 'complemento',
                                            placeholder: 'Complemento do endereço',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Bairro',
                                            name: 'bairro',
                                            placeholder: 'Bairro do endereço',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Cidade',
                                            name: 'cidade',
                                            placeholder: 'Cidade do endereço',
                                            type: FormInputTypeEnum.Text,
                                        },
                                    },
                                    {
                                        input: {
                                            label: 'Estado',
                                            name: 'estado',
                                            placeholder: 'Estado do endereço',
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
                                            label: 'Profissão',
                                            name: 'profissao',
                                            placeholder: 'Profissão do comprador',
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
                                            label: 'Data de admissão',
                                            name: 'data_admissao',
                                            placeholder: 'Data de admissão na empresa em que atua',
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
                                                    label: 'Autônomo',
                                                    value: '116',
                                                },
                                                {
                                                    label: 'Profissional liberal',
                                                    value: '117',
                                                },
                                                {
                                                    label: 'Sócio proprietário',
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
                                            label: 'Renda mensal líquida',
                                            name: 'renda_mensal_liquida',
                                            placeholder: 'Renda mensal líquida do comprador',
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