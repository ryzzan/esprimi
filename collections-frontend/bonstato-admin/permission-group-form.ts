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
                    optionsObject: [{
                            label: 'Módulo 1',
                            value: 'module1',
                        },
                        {
                            label: 'Módulo 2',
                            value: 'module2',
                        },
                        {
                            label: 'Módulo 3',
                            value: 'module3',
                        },
                        {
                            label: 'Módulo 4',
                            value: 'module4',
                        },
                        {
                            label: 'Módulo 5',
                            value: 'module5',
                        },
                    ],
                    isRequired: true,
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