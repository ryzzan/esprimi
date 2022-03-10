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
                    optionsApi: {
                        endpoint: 'modules?page=0&size=25&sort=description(asc)',
                        labelField: 'name',
                        valueField: 'uuid'
                    },
                    isRequired: true
                },
            },
            {
                input: {
                    label: 'Aplicação',
                    placeholder: 'Nome da aplicação',
                    name: 'name',
                    type: FormInputTypeEnum.Text,
                    isRequired: true
                }
            },
            {
                input: {
                    label: 'Código',
                    placeholder: 'Código da aplicação',
                    name: 'code',
                    type: FormInputTypeEnum.Text
                }
            },
            {
                input: {
                    label: 'Descrição',
                    placeholder: 'Descrição da aplicação',
                    name: 'description',
                    type: FormInputTypeEnum.Text
                }
            },
            {
                select: {
                    label: 'Features',
                    name: 'features',
                    optionsObject: [{
                        label: '2bcef1e3-a1e3-44f8-bb3c-c28f5c53f467',
                        value: '2bcef1e3-a1e3-44f8-bb3c-c28f5c53f467',
                        isSelected: true
                    }],
                    isMultiple: true,
                    isRequired: true
                }
            }
            // {
            //     array: {
            //         id: 'applications',
            //         title: 'Aplicações',
            //         elements: [
            //             {
            //                 input: {
            //                     label: 'Aplicação',
            //                     placeholder: 'Nome da aplicação',
            //                     name: 'name',
            //                     type: FormInputTypeEnum.Text,
            //                     isRequired: true
            //                 }
            //             },
            //             {
            //                 input: {
            //                     label: 'Código',
            //                     placeholder: 'Código da aplicação',
            //                     name: 'code',
            //                     type: FormInputTypeEnum.Text
            //                 }
            //             },
            //             {
            //                 input: {
            //                     label: 'Descrição',
            //                     placeholder: 'Descrição da aplicação',
            //                     name: 'description',
            //                     type: FormInputTypeEnum.Text
            //                 }
            //             },
            //             {
            //                 select: {
            //                     label: 'Features',
            //                     name: 'features',
            //                     optionsObject: [{
            //                         label: '2bcef1e3-a1e3-44f8-bb3c-c28f5c53f467',
            //                         value: '2bcef1e3-a1e3-44f8-bb3c-c28f5c53f467',
            //                         isSelected: true
            //                     }],
            //                     isMultiple: true,
            //                     isRequired: true
            //                 }
            //             }
            //         ]
            //     }
            // }
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