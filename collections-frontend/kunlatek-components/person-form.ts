import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const PERSON_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Pessoa',
        id: 'personForm',
        elements: [
            {
                input: {
                    label: 'CPF',
                    name: 'uniqueId',
                    placeholder: 'Seu CPF',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Data de nascimento',
                    name: 'birthday',
                    placeholder: 'Sua data de nascimento',
                    type: FormInputTypeEnum.Date,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Nome',
                    name: 'name',
                    placeholder: 'Nome completo',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                    isDisabled: true,
                },
            },
            {
                select: {
                    label: 'Gênero',
                    name: 'gender',
                    optionsObject: [{
                            label: 'Feminino',
                            value: 'female',
                        },
                        {
                            label: 'Masculino',
                            value: 'male',
                        },
                    ],
                    isDisabled: true
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
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app0',
            endPoint: 'people',
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