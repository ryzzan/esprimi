import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../src/enums/form';
import { FrontendFrameworkEnum } from '../../src/enums/main';
import {
  MainInterface,
} from '../../src/interfaces/main';

export const APPLICATION_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Aplicação',
        id: 'applicationForm',
        elements: [
            {
                select: {
                    label: 'Módulo',
                    name: 'module',
                    optionsObject: [{
                            label: 'Módulo 1',
                            value: 'module1',
                        },
                        {
                            label: 'Módulo 2',
                            value: 'module2',
                        },
                    ],
                    isRequired: true
                },
            },
            {
                array: {
                    id: 'applications',
                    title: 'Aplicações',
                    elements: [{
                        input: {
                            label: 'Aplicação',
                            placeholder: 'Nome da aplicação',
                            name: 'application',
                            type: FormInputTypeEnum.Text,
                            isRequired: true
                        }
                    }]
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
            hasAuthorization: false,
            baseUrl: 'http://devbackadmin.lpsbr.com/api/v1',
            endPoint: 'applications',
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