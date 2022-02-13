import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../../src/enums/form';
import { FrontendFrameworkEnum } from '../../../src/enums/main';
import {
  MainInterface,
} from '../../../src/interfaces/main';

export const OCCUPATION_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: 'Ocupação',
    id: 'occupationForm',
    elements: [
      {
        tabs: [
          {
            title: 'Grupo',
            elements: [
              {
                input: {
                  label: 'Nome',
                  name: 'occupationGroupName',
                  placeholder: 'Nome do grupo principal',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: 'Código',
                  name: 'occupationGroupCode',
                  placeholder: 'Código do grupo principal',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: 'Descrição',
                  name: 'occupationGroupDescription',
                  placeholder: 'Descrição do grupo principal',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              }
            ],
            id: 'occupationGroupTab',
          },
          {
            title: 'Subgrupo principal',
            elements: [
                {
                    array: {
                        id: 'occupationMainSubgroupArray',
                        title: 'Ocupação',
                        elements: [
                            {
                                input: {
                                label: 'Nome',
                                name: 'occupationMainSubgroupName',
                                placeholder: 'Nome do subgrupo principal',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                },
                            },
                            {
                              input: {
                                label: 'Código',
                                name: 'occupationMainSubgroupCode',
                                placeholder: 'Código do grupo principal',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                              },
                            },
                            {
                                input: {
                                label: 'Descrição',
                                name: 'occupationMainSubgroupDescription',
                                placeholder: 'Descrição do subgrupo principal',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                },
                            }                            
                        ]
                    }
                },
            ],
            id: 'occupationMainSubgroupTab',
          },
          {
            title: 'Subgrupo',
            elements: [
                {
                    array: {
                        id: 'occupationSubgroupArray',
                        title: 'Subgroup',
                        elements: [
                            {
                                input: {
                                label: 'Nome',
                                name: 'occupationSubgroupName',
                                placeholder: 'Nome do subgrupo',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                },
                            },
                            {
                              input: {
                                label: 'Código',
                                name: 'occupationSubgroupCode',
                                placeholder: 'Código do subgrupo',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                              },
                            },
                            {
                                input: {
                                label: 'Descrição',
                                name: 'occupationSubgroupDescription',
                                placeholder: 'Descrição do subgrupo',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                },
                            }
                        ]
                    }
                },
            ],
            id: 'occupationSubgroupTab',
          },
          {
            title: 'Família',
            elements: [
                {
                    array: {
                        id: 'occupationFamilyArray',
                        title: 'Família',
                        elements: [
                            {
                                input: {
                                label: 'Nome',
                                name: 'occupationFamilyName',
                                placeholder: 'Nome da família',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                },
                            },
                            {
                              input: {
                                label: 'Código',
                                name: 'occupationFamilyCode',
                                placeholder: 'Código da família',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                              },
                            },
                            {
                                input: {
                                label: 'Descrição',
                                name: 'occupationFamilyDescription',
                                placeholder: 'Descrição da família',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                },
                            }                            
                        ]
                    }
                },
            ],
            id: 'occupationFamilyTab',
          },
          {
            title: 'Ocupação',
            todo: 'Adicionar array de sinônimos',
            elements: [
                {
                    array: {
                        id: 'occupationArray',
                        title: 'Ocupação',
                        elements: [
                            {
                                input: {
                                label: 'Nome',
                                name: 'occupationName',
                                placeholder: 'Nome da ocupação',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                },
                            },
                            {
                              input: {
                                label: 'Código',
                                name: 'occupationCode',
                                placeholder: 'Código da ocupação',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                              },
                            },
                            {
                                input: {
                                label: 'Descrição',
                                name: 'occupationDescription',
                                placeholder: 'Descrição da ocupação',
                                type: FormInputTypeEnum.Text,
                                isRequired: true,
                                },
                            }
                        ]
                    }
                },
            ],
            id: 'occupationTab',
          },
        ],
      },
    ],
    actions: [
      {
        button: {
          label: 'Criar',
          type: FormButtonTypeEnum.Submit,
          icon: 'save',          
        },
      },
    ],
    service: {
      baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app',
      endPoint: 'occupations',
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
