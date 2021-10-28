import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../src/enums/form';
import { FrontendFrameworkEnum } from '../../src/enums/main';
import {
  MainInterface,
} from '../../src/interfaces/main';

export const USER_GROUP_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Grupo de usuários',
        id: 'userGroupForm',
        elements: [
            {
                input: {
                    label: 'Grupo de usuários',
                    placeholder: 'Nome do grupo de usuários',
                    name: 'name',
                    type: FormInputTypeEnum.Text,
                    isRequired: true
                }
            },
            {
                select: {
                    label: 'Usuários',
                    name: 'users',
                    optionsObject: [{
                            label: 'Usuário 1',
                            value: 'user1',
                        },
                        {
                            label: 'Usuário 2',
                            value: 'user2',
                        }, 
                        {
                            label: 'Usuário 3',
                            value: 'user3',
                        },
                        {
                            label: 'Usuário 4',
                            value: 'user4',
                        }
                    ],
                    isMultiple: true,
                    todo: 'Autocomplete'
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
            baseUrl: 'http://localhost:3000',
            endPoint: 'userGroups',
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