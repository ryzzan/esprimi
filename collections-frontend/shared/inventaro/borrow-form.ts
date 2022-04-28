import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../../src/enums/form';
import { FrontendFrameworkEnum } from '../../../src/enums/main';
import {
  MainInterface,
} from '../../../src/interfaces/main';

export const BORROW_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: 'Empréstimo',
    id: 'borrowForm',
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
