import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const TASK_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Resultado chave',
        id: 'taskForm',
        elements: [{
                select: {
                    label: 'Resultado chave',
                    name: 'keyResultId',
                    type: FormInputTypeEnum.Text,
                    optionsApi: {
                        endpoint: 'keyResults',
                        labelField: 'name',
                        valueField: '_id',
                    }
                }
            }, 
            {
                array: {
                    id: 'taskArray',
                    title: 'Tarefas',
                    elements: [
                        {
                            input: {
                                label: 'Nome',
                                name: 'names',
                                placeholder: 'Nome da tarefa',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                            },
                        },
                        {
                            input: {
                                label: 'Descrição',
                                name: 'description',
                                placeholder: 'Breve descrição da tarefa',
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
            endPoint: 'tasks',
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