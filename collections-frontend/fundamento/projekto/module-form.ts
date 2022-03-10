import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../../src/enums/form';
import { FrontendFrameworkEnum } from '../../../src/enums/main';
import {
  MainInterface,
} from '../../../src/interfaces/main';

export const MODULE_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: 'Módulo',
    id: 'moduleForm',
    elements: [
      {
        tabs: [
          {
            title: 'Módulo',
            elements: [
                {
                    select: {
                        label: 'Projeto',
                        name: 'projectId',
                        optionsApi: {
                            endpoint: 'projects',
                            labelField: 'name',
                            valueField: 'id'
                        },
                        isRequired: true,
                    },
                },
                {
                    input: {
                        label: 'Nome',
                        name: 'name',
                        placeholder: 'Nome do módulo',
                        type: FormInputTypeEnum.Text,
                        isRequired: true,
                    },
                },
                {
                    input: {
                        label: 'Descrição',
                        name: 'description',
                        placeholder: 'Breve descrição do módulo',
                        type: FormInputTypeEnum.Text,
                    },
                },
            ],
            id: 'moduleTab',
            label: 'Módulo',
          },
          {
            title: 'Componentes',
            elements: [
              {
                array: {
                  title: 'Componente',
                  elements: [
                    {
                        input: {
                            label: 'Nome',
                            name: 'name',
                            placeholder: 'Nome do componente',
                            type: FormInputTypeEnum.Text,
                            isRequired: true,
                        },
                    }
                  ],
                  id: 'moduleArray',
                },
              },
            ],
            id: 'componentTab',
            label: 'Componente',
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
      hasAuthorization: true,
      baseUrl: 'https://projekto-tftftsuywa-uc.a.run.app',
      endPoint: 'modules',
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
