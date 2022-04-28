import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../../src/enums/form';
import { FrontendFrameworkEnum } from '../../../src/enums/main';
import {
  MainInterface,
} from '../../../src/interfaces/main';

export const OUTPUT_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: 'Saída',
    id: 'outputForm',
    elements: [
      {
        tabs: [
          {
            title: 'Produto',
            elements: [
              {
                select: {
                  label: 'Produto',
                  name: 'product',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
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
              {
                input: {
                  label: 'Lote',
                  name: 'allotment',
                  placeholder: 'Identificação de lote',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: 'Validade',
                  name: 'dueDate',
                  placeholder: 'Data de vencimento do produto',
                  type: FormInputTypeEnum.Date,
                },
              },
              {
                input: {
                  label: 'Número de série',
                  name: 'serialNumber',
                  placeholder: 'Número de série',
                  type: FormInputTypeEnum.Text,
                },
              },
              {
                input: {
                  label: 'Identificador único',
                  name: 'productUniqueId',
                  placeholder: 'Número de série',
                  type: FormInputTypeEnum.Text,
                },
              },
            ],
            id: 'productTab',
          },
          {
            title: 'Manutenções e empréstimos',
            id: 'maintenanceAndBorrowTab',
            elements: [
              {
                array: {
                  title: 'Manutenções',
                  elements: [
                    {
                      input: {
                        label: 'Última manutenção',
                        name: 'lastMaintenanceDate',
                        placeholder: 'Data da última manutenção',
                        type: FormInputTypeEnum.Date,
                      },
                    },
                    {
                      input: {
                        label: 'Próxima manutenção',
                        name: 'nextMaintenanceDate',
                        placeholder: 'Data da próxima manutenção',
                        type: FormInputTypeEnum.Date,
                      },
                    },
                    {
                      select: {
                        label: 'Responsáveis',
                        name: 'maintenanceResponsible',
                        type: FormInputTypeEnum.Text,
                        optionsApi: {
                          endpoint: '/users',
                          labelField: 'Nome',
                          valueField: '_id'
                        },
                        isMultiple: true,
                      }
                    },
                    {
                      input: {
                        label: 'Anotações',
                        name: 'maintenanceNote',
                        placeholder: 'Anotações da manutenção',
                        type: FormInputTypeEnum.Text,
                      },
                    },
                  ],
                  id: 'maintenanceArray',
                },
              },
              {
                array: {
                  title: 'Empréstimos',
                  elements: [
                    {
                      input: {
                        label: 'Empréstimo',
                        name: 'borrowDate',
                        placeholder: 'Data do empréstimo',
                        type: FormInputTypeEnum.Date,
                      },
                    },
                    {
                      input: {
                        label: 'Devolução',
                        name: 'devolutionDate',
                        placeholder: 'Data de devolução',
                        type: FormInputTypeEnum.Date,
                      },
                    },
                    {
                      select: {
                        label: 'Responsáveis',
                        name: 'borrowResponsible',
                        type: FormInputTypeEnum.Text,
                        optionsApi: {
                          endpoint: '/users',
                          labelField: 'Nome',
                          valueField: '_id'
                        },
                        isMultiple: true,
                      }
                    },
                    {
                      input: {
                        label: 'Anotações',
                        name: 'borrowNote',
                        placeholder: 'Anotações sobre o empréstimo',
                        type: FormInputTypeEnum.Text,
                      },
                    },
                  ],
                  id: 'borrowArray',
                },
              },
            ],
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