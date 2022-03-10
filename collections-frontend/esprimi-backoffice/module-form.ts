import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const MODULE_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Módulo',
        id: 'moduleForm',
        elements: [
            {
                input: {
                    label: 'Identidade',
                    name: 'id',
                    placeholder: 'Ex.: exampleModule',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Legenda de menu',
                    name: 'title',
                    placeholder: 'Ex.: Examples',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                select: {
                    label: 'Componentes',
                    name: 'componentId',
                    optionsApi: {
                        endpoint: 'components',
                        labelField: 'title',
                        valueField: 'id'
                    },
                    isMultiple: true
                }
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
            hasAuthorization: true,
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app',
            endPoint: 'modules',
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