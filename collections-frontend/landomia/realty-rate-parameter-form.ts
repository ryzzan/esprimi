import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const REALTY_RATE_PARAMETER_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Avaliação sobre o imóvel',
        id: 'realtyRateParameterForm',
        elements: [{
                input: {
                    label: 'Nome',
                    name: 'name',
                    placeholder: 'Nome do elemento de avaliação',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Descrição',
                    name: 'description',
                    placeholder: 'Breve descrição do elemento de avaliação',
                    type: FormInputTypeEnum.Text,
                },
            },
            {
                array: {
                    id: 'ratePointArray',
                    title: 'Avaliação por tipo de imóvel',
                    elements: [{
                        select: {
                            label: 'Tipo de imóvel',
                            name: 'realtyTypeId',
                            optionsApi: {
                                endpoint: 'realty-types',
                                labelField: 'name',
                                valueField: '_id',
                            },
                            isRequired: true,
                        }
                    },
                    {
                        input: {
                            label: 'Pontuação',
                            name: 'rate',
                            placeholder: 'Ponto para medir valorização',
                            type: FormInputTypeEnum.Text,
                            isRequired: true,
                        },
                    }]
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
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app',
            endPoint: 'realty-rate-parameters',
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