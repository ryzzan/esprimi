import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../src/enums/form';
import { FrontendFrameworkEnum } from '../../src/enums/main';
import {
  MainInterface,
} from '../../src/interfaces/main';

export const PERMISSION_USER_GROUP_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Grupo de permissão de grupos de usuários',
        id: 'permissionUserGroupForm',
        elements: [
            {
                select: {
                    label: 'Grupo de permissão',
                    name: 'permissionGroup',
                    type: FormInputTypeEnum.Text,
                    optionsObject: [{
                            label: 'Grupo de permissão 1',
                            value: 'Grupo de permissão 1',
                        },
                        {
                            label: 'Grupo de permissão 2',
                            value: 'Grupo de permissão 2',
                        }, 
                        {
                            label: 'Grupo de permissão 3',
                            value: 'Grupo de permissão 3',
                        },
                        {
                            label: 'Grupo de permissão 4',
                            value: 'Grupo de permissão 4',
                        }
                    ],
                    isRequired: true,
                    todo: 'Autocomplete'
                },
            },
            {
                select: {
                    label: 'Grupos de usuários',
                    name: 'usersGroups',
                    type: FormInputTypeEnum.Text,
                    optionsObject: [{
                        label: 'Grupo de usuários 1',
                        value: 'Grupo de usuários 1'
                    }
                    ,{
                        label: 'Grupo de usuários 2',
                        value: 'Grupo de usuários 2'
                    },
                    {
                        label: 'Grupo de usuários 3',
                        value: 'Grupo de usuários 3'
                    }],
                    isRequired: true,
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
            baseUrl: 'http://localhost:3000',
            endPoint: 'permissionUserGroups',
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