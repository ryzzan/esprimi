import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../src/enums/form';
import { FrontendFrameworkEnum } from '../../src/enums/main';
import {
  MainInterface,
} from '../../src/interfaces/main';

export const PERMISSION_GROUP_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Grupo de permissão',
        id: 'permissionGroupForm',
        elements: [
            {
                input: {
                    label: 'Grupo',
                    placeholder: 'Nome do grupo',
                    name: 'name',
                    type: FormInputTypeEnum.Text,
                    isRequired: true
                }
            },
            {
                input: {
                    label: 'Descrição',
                    placeholder: 'Descrição do grupo',
                    name: 'description',
                    type: FormInputTypeEnum.Text,
                    isRequired: true
                }
            },
            {
                select: {
                    label: 'Módulo',
                    name: 'module',
                    type: FormInputTypeEnum.Text,
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
                select: {
                    label: 'Grupos de usuários',
                    name: 'userGroups',
                    type: FormInputTypeEnum.Text,
                    optionsObject: [{
                            label: 'Grupo de usuários 1',
                            value: 'Grupo de usuários 1',
                        },
                        {
                            label: 'Grupo de usuários 2',
                            value: 'Grupo de usuários 2',
                        },
                        {
                            label: 'Grupo de usuários 3',
                            value: 'Grupo de usuários 3',
                        },
                        {
                            label: 'Grupo de usuários 4',
                            value: 'Grupo de usuários 4',
                        },
                    ],
                    isRequired: true,
                    isMultiple: true
                },
            },
            {
                input: {
                    label: 'Aplicação 1',
                    placeholder: 'Descrição do grupo modelo',
                    value: 'Aplicação 1 do módulo',
                    name: 'application1',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                    isDisabled: true
                }
            },
            {
                select: {
                    label: 'Permissões',
                    name: 'permissions1',
                    type: FormInputTypeEnum.Text,
                    optionsObject: [{
                            label: 'Criar',
                            value: 'create',
                        },
                        {
                            label: 'Ler',
                            value: 'read',
                        },
                        {
                            label: 'Atualizar',
                            value: 'update',
                        },
                        {
                            label: 'Remover',
                            value: 'delete',
                        },
                    ],
                    isRequired: true,
                    isMultiple: true
                },
            },
            {
                input: {
                    label: 'Aplicação 2',
                    placeholder: 'Descrição do grupo modelo',
                    value: 'Aplicação 2 do módulo',
                    name: 'application2',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                    isDisabled: true
                }
            },
            {
                select: {
                    label: 'Permissões',
                    name: 'permissions2',
                    type: FormInputTypeEnum.Text,
                    optionsObject: [{
                            label: 'Criar',
                            value: 'create',
                        },
                        {
                            label: 'Ler',
                            value: 'read',
                        },
                        {
                            label: 'Atualizar',
                            value: 'update',
                        },
                        {
                            label: 'Remover',
                            value: 'delete',
                        },
                    ],
                    isRequired: true,
                    isMultiple: true
                },
            },
            {
                input: {
                    label: 'Aplicação 3',
                    placeholder: 'Descrição do grupo modelo',
                    value: 'Aplicação 3 do módulo',
                    name: 'application3',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                    isDisabled: true
                }
            },
            {
                select: {
                    label: 'Permissões',
                    name: 'permissions3',
                    type: FormInputTypeEnum.Text,
                    optionsObject: [{
                            label: 'Criar',
                            value: 'create',
                        },
                        {
                            label: 'Ler',
                            value: 'read',
                        },
                        {
                            label: 'Atualizar',
                            value: 'update',
                        },
                        {
                            label: 'Remover',
                            value: 'delete',
                        },
                    ],
                    isRequired: true,
                    isMultiple: true
                },
            },
            {
                input: {
                    label: 'Aplicação 4',
                    placeholder: 'Descrição do grupo modelo',
                    value: 'Aplicação 4 do módulo',
                    name: 'application4',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                    isDisabled: true
                }
            },
            {
                select: {
                    label: 'Permissões',
                    name: 'permissions4',
                    type: FormInputTypeEnum.Text,
                    optionsObject: [{
                            label: 'Criar',
                            value: 'create',
                        },
                        {
                            label: 'Ler',
                            value: 'read',
                        },
                        {
                            label: 'Atualizar',
                            value: 'update',
                        },
                        {
                            label: 'Remover',
                            value: 'delete',
                        },
                    ],
                    isRequired: true,
                    isMultiple: true
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
            endPoint: 'permissionGroups',
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