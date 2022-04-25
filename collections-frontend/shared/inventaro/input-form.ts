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
      endPoint: 'inputs',
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
