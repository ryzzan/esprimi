import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const COMPANY_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Empresa',
        id: 'companyForm',
        elements: [
            {
                input: {
                    label: 'CNPJ',
                    name: 'uniqueId',
                    placeholder: 'CNPJ da sua empresa',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Razão social',
                    name: 'companyName',
                    placeholder: 'Nome jurídico da empresa',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                    isDisabled: true,
                },
            },
            {
                input: {
                    label: 'Nome fantasia',
                    name: 'businessName',
                    placeholder: 'Nome comercial da empresa',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                    isDisabled: true,
                },
            },
            {
                input: {
                    label: 'Celular',
                    name: 'phone',
                    placeholder: 'Seu celular disponível',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Código',
                    name: 'smsCode',
                    placeholder: 'Código enviado para seu celular',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
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
            endPoint: 'companies',
            hasAuthorization: true,
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