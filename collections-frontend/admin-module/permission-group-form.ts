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
                    label: 'Grupo modelo',
                    placeholder: 'Nome do grupo modelo',
                    name: 'name',
                    type: FormInputTypeEnum.Text,
                    isRequired: true
                }
            },
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
                select: {
                    label: 'Aplicativo',
                    name: 'application',
                    optionsObject: [{
                            label: 'Aplicativo 1',
                            value: 'application1',
                        },
                        {
                            label: 'Aplicativo 2',
                            value: 'application2',
                        },
                    ],
                    isRequired: true
                },
            },
            {
                select: {
                    label: 'Permissões',
                    name: 'permissions',
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