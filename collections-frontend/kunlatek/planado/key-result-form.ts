import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const KEY_RESULT_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Resultado chave',
        id: 'keyResultForm',
        elements: [{
                select: {
                    label: 'Objetivo',
                    name: 'objectId',
                    type: FormInputTypeEnum.Text,
                    optionsApi: {
                        endpoint: 'objects',
                        labelField: 'name',
                        valueField: '_id',
                    }
                }
            }, 
            {
                array: {
                    id: 'keyResultArray',
                    title: 'Resultados chave',
                    elements: [
                        {
                            input: {
                                label: 'Nome',
                                name: 'name',
                                placeholder: 'Nome do resultado chave',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                            },
                        },
                        {
                            input: {
                                label: 'Descrição',
                                name: 'description',
                                placeholder: 'Breve descrição do resultado chave',
                                type: FormInputTypeEnum.Text,
                            },
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
            baseUrl: 'http://localhost:3000',
            endPoint: 'keyResult',
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