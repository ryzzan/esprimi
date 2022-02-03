import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const OBJECTIVE_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Objetivo',
        id: 'objectiveForm',
        elements: [{
                select: {
                    label: 'Projeto',
                    name: 'projectId',
                    optionsApi: {
                        endpoint: 'projects',
                        labelField: 'name',
                        valueField: '_id',
                    }
                }
            },
            {
                array: {
                    id: 'objectiveArray',
                    title: 'Objetivos',
                    elements: [
                        {
                            input: {
                                label: 'Nome',
                                name: 'name',
                                placeholder: 'Nome do objetivo',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                            },
                        },
                        {
                            input: {
                                label: 'Descrição',
                                name: 'description',
                                placeholder: 'Breve descrição do objetivo',
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
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app0',
            endPoint: 'objective',
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