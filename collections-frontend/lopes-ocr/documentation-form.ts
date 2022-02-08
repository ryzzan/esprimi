import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const DOCUMENTATION_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Documentação',
        id: 'documentationForm',
        elements: [{
                input: {
                    label: 'Nome',
                    name: 'name',
                    placeholder: 'Identificação da documentação',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                array: {
                    id: 'documenationAttributes',
                    title: 'Atributos de documentação',
                    elements: [
                        {
                            input: {
                                label: 'Nome',
                                name: 'attributeName',
                                placeholder: 'Nome de atributo da documentação',
                                type: FormInputTypeEnum.Text
                            }
                        }
                    ]
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
            endPoint: 'documentations',
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