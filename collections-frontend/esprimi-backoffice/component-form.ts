import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const COMPONENT_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Componente',
        id: 'componentForm',
        elements: [
            {
                select: {
                    label: 'Tipo',
                    name: 'componentType',
                    optionsObject: [{
                            label: 'Formulário',
                            value: 'form',
                        },
                        {
                            label: 'Tabela',
                            value: 'table',
                        },
                    ],
                    isRequired: true
                },
            },
            {
                input: {
                    label: 'Título',
                    name: 'title',
                    placeholder: 'Ex.: Example',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Identidade',
                    name: 'id',
                    placeholder: 'Ex.: exampleForm, exampleTable',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                array: {
                    id: 'componentArray',
                    title: 'Componente',
                    elements: [
                        {
                            select: {
                                label: 'Elemento',
                                name: 'element',
                                optionsObject: [
                                    {
                                        label: 'Checkbox',
                                        value: 'checkbox'
                                    },
                                    {
                                        label: 'Input',
                                        value: 'input'
                                    },
                                    {
                                        label: 'Radio',
                                        value: 'radio'
                                    },
                                    {
                                        label: 'Select',
                                        value: 'select'
                                    },
                                ],
                                isRequired: true,
                            }
                        },
                        {
                            input: {
                                label: 'Legenda do elemento',
                                name: 'label',
                                placeholder: 'Atributo label do elemento',
                                type: FormInputTypeEnum.Text,
                                isRequired: true
                            },
                        },
                        {
                            input: {
                                label: 'Nome do elemento',
                                name: 'name',
                                placeholder: 'Atributo name do elemento',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                            },
                        },
                        {
                            select: {
                                label: 'Tipagem do elemento',
                                name: 'type',
                                optionsObject: [
                                    {
                                        label: 'Color',
                                        value: 'Color'
                                    },
                                    {
                                        label: 'Date',
                                        value: 'Date'
                                    },
                                    {
                                        label: 'Email',
                                        value: 'Email'
                                    },
                                    {
                                        label: 'File',
                                        value: 'File'
                                    },
                                    {
                                        label: 'Password',
                                        value: 'Password'
                                    },
                                    {
                                        label: 'Tel',
                                        value: 'Tel'
                                    },
                                    {
                                        label: 'Url',
                                        value: 'Url'
                                    },
                                    {
                                        label: 'Number',
                                        value: 'Number'
                                    },
                                    {
                                        label: 'Text',
                                        value: 'Text'
                                    },
                                    {
                                        label: 'Time',
                                        value: 'Time'
                                    }
                                ]
                            }
                        },
                        {
                            input: {
                                label: 'Descrição do input',
                                name: 'placeholder',
                                placeholder: 'Atributo placeholder do input',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                condition: 'element === "input"'
                            },
                        },
                        {
                            input: {
                                label: 'Endpoint',
                                name: 'endpoint',
                                placeholder: 'Endpoint para montar options do select',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                condition: 'element === "select"'
                            },
                        },
                        {
                            input: {
                                label: 'Campo de legenda da opção',
                                name: 'labelField',
                                placeholder: 'Campo de BD que preencherá o campo label de option',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                condition: 'element === "select"'
                            },
                        },
                        {
                            input: {
                                label: 'Campo de valor da opção',
                                name: 'valueField',
                                placeholder: 'Campo de BD que preencherá o campo value de option',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                condition: 'element === "select"'
                            },
                        },
                    ]
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
            endPoint: 'components',
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