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
                input: {
                    label: 'Descrição',
                    placeholder: 'Descrição do grupo de usuários',
                    name: 'description',
                    type: FormInputTypeEnum.Text,
                    isRequired: true
                }
            },
            {
                select: {
                    label: 'Empresa',
                    name: 'company',
                    optionsObject: [{
                            label: 'Empresa 1',
                            value: 'company1',
                        },
                        {
                            label: 'Empresa 2',
                            value: 'company2',
                        }, 
                        {
                            label: 'Empresa 3',
                            value: 'company3',
                        },
                        {
                            label: 'Empresa 4',
                            value: 'company4',
                        }
                    ],
                    todo: 'Autocomplete'
                },
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
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app',
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