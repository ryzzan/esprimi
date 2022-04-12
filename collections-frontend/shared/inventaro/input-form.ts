import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../../src/enums/form';
import { FrontendFrameworkEnum } from '../../../src/enums/main';
import {
  MainInterface,
} from '../../../src/interfaces/main';

export const INPUT_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: 'Entrada',
    id: 'inputForm',
    elements: [
      {
        tabs: [
          {
            title: 'Título exemplo',
            elements: [
              {
                select: {
                  label: 'Produto',
                  name: 'product',
                  type: FormInputTypeEnum.Text,
                  optionsApi: {
                    endpoint: '/products',
                    labelField: 'name',
                    valueField: '_id',
                  },
                },
              },
              {
                input: {
                  label: 'Quantidade',
                  name: 'quantity',
                  placeholder: 'Quantidade de produto',
                  type: FormInputTypeEnum.Number,
                  isRequired: true,
                  todo: 'Anotar unidade de medidade de acordo com o produto escolhido'
                },
              },
            ],
            id: 'exampleTab',
            label: 'Rótulo exemplo',
          },
          {
            title: 'Outro título',
            elements: [
              {
                array: {
                  title: 'Exemplo de array',
                  elements: [
                    {
                      select: {
                        label: 'Outro select',
                        name: 'otherSelect',
                        type: FormInputTypeEnum.Text,
                        optionsObject: [
                          {
                            label: 'Opção 1',
                            value: 'option1',
                          },
                          {
                            label: 'Opção 2',
                            value: 'option2',
                          },
                          {
                            label: 'Opção 3',
                            value: 'option3',
                          },
                        ],
                      },
                    },
                    {
                      input: {
                        label: 'Outro input',
                        name: 'otherInput',
                        placeholder: 'Placeholder pra outro input',
                        type: FormInputTypeEnum.Text,
                      },
                    },
                    {
                        slide: {
                            label: 'Outro slide',
                            name: 'otherSlide',
                            placeholder: 'Placeholder pra outro slide',
                            type: FormInputTypeEnum.Text
                        }
                    },
                  ],
                  id: 'exampleArray',
                },
              },
            ],
            id: 'exampleOtherTab',
            label: 'Outro rótulo',
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
      endPoint: 'examples',
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
