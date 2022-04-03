import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const PERMISSION_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Permissão',
        id: 'permissionForm',
        elements: [
            {
                input: {
                    label: 'Nome',
                    name: 'name',
                    placeholder: 'Nome do grupo',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Descrição',
                    name: 'description',
                    placeholder: 'Descrição do grupo',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                select: {
                    label: 'Usuários relacionados',
                    name: 'users',
                    type: FormInputTypeEnum.Text,
                    optionsApi: {
                        endpoint: 'projects',
                        labelField: 'name',
                        valueField: 'id',
                    },
                },
            },
            {
                array: {
                    id: 'modulesPermissions',
                    title: 'Permissões de módulos',
                    elements: [{
                        select: {
                            label: 'Módulo',
                            name: 'module',
                            type: FormInputTypeEnum.Text,
                            optionsApi: {
                                endpoint: 'modules',
                                labelField: 'name',
                                valueField: 'id'
                            },
                            isDisabled: true,
                            isMultiple: true
                        }
                    }, 
                    {
                        select: {
                            label: 'Permissões',
                            name: 'permissions',
                            type: FormInputTypeEnum.Text,
                            optionsApi: {
                                endpoint: 'permissions',
                                labelField: 'name',
                                valueField: 'id',
                            },
                            isDisabled: true,
                            isMultiple: true
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
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app',
            endPoint: 'permissions',
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