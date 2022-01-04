import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../src/enums/form';
import { FrontendFrameworkEnum } from '../../src/enums/main';
import {
  MainInterface,
} from '../../src/interfaces/main';

export const EXAMPLE_WITH_TABS_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: 'Título exemplo',
    id: 'exampleForm',
    elements: [
      {
        tabs: [
          {
            title: 'Título exemplo',
            elements: [
              {
                input: {
                  label: 'Um input',
                  name: 'oneInput',
                  placeholder: 'Placeholder prum input',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                select: {
                  label: 'Um select',
                  name: 'oneSelect',
                  optionsObject: [
                    {
                      label: 'Opção 1',
                      value: 'option1',
                    },
                    {
                      label: 'Opção 2',
                      value: 'option2',
                    },
                  ]
                },
              },
              {
                  slide: {
                      label: 'Um slide',
                      name: 'oneSlide',
                      placeholder: 'Placeholder prum slide',
                      type: FormInputTypeEnum.Text
                  }
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
      baseUrl: 'http://localhost:3000',
      endPoint: 'examples',
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
