import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const REALTY_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Imóvel',
        id: 'realtyForm',
        elements: [
            {
                select: {
                    label: 'Tipo de imóvel',
                    name: 'tipo_imovel',
                    optionsApi: {
                        endpoint: 'crm/auxlist/get/tipo_imovel_list',
                        labelField: 'name',
                        valueField: 'id'
                    }
                },
            },
            {
                select: {
                    label: 'Tipo de produto',
                    name: 'tipo_produto',
                    optionsApi: {
                        endpoint: 'crm/auxlist/get/tipo_produto_list',
                        labelField: 'name',
                        valueField: 'id'
                    }
                },
            },
            {
                select: {
                    label: 'Tipo de taxa',
                    name: 'tabela_amortizacao',
                    optionsApi: {
                        endpoint: 'crm/auxlist/get/tipo_amortizacao_list',
                        labelField: 'name',
                        valueField: 'id'
                    }
                },
            },
            {
                select: {
                    label: 'UF do imóvel',
                    name: 'uf',
                    optionsApi: {
                        endpoint: 'crm/auxlist/get/uf_list',
                        labelField: 'name',
                        valueField: 'id'
                    }
                },
            },
            {
                input: {
                    label: 'Cidade',
                    name: 'cidade',
                    placeholder: 'Cidade do imóvel',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Valor do imóvel',
                    name: 'valor_imovel',
                    placeholder: 'Valor total do imóvel',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Valor do financiamento',
                    name: 'valor_financiamento',
                    placeholder: 'Valor do finaciamento do imóvel',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Prazo em meses',
                    name: 'prazo',
                    placeholder: 'Prazo em até 360 meses',
                    type: FormInputTypeEnum.Number,
                    isRequired: true,
                },
            },
            {
                select: {
                    label: 'Incorporar financiamento',
                    name: 'incorporar_financiamento',
                    optionsApi: {
                        endpoint: 'crm/auxlist/get/true_false',
                        labelField: 'name',
                        valueField: 'id'
                    }
                },
            },
            {
                select: {
                    label: 'Incorporar tarifa de avaliação',
                    name: 'incorporar_tarifa_avaliacao',
                    optionsApi: {
                        endpoint: 'crm/auxlist/get/true_false',
                        labelField: 'name',
                        valueField: 'id'
                    }
                },
            }
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
            endPoint: 'realties',
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