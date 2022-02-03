import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../../src/enums/form';
import { FrontendFrameworkEnum } from '../../../src/enums/main';
import {
  MainInterface,
} from '../../../src/interfaces/main';

export const SCHEDULE_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: 'Compromisso',
    id: 'scheduleForm',
    elements: [
      {
        tabs: [
          {
            title: 'Compromisso',
            elements: [
              {
                input: {
                  label: 'Título',
                  name: 'scheduleName',
                  placeholder: 'Nome dado ao compromisso',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: 'Data do início',
                  name: 'scheduleStartDate',
                  placeholder: 'O dia que inicia o compromisso',
                  type: FormInputTypeEnum.Date,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: 'Hora do início',
                  name: 'scheduleStartTime',
                  placeholder: 'A hora que inicia o compromisso',
                  type: FormInputTypeEnum.Time,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: 'Data do fim',
                  name: 'scheduleEndDate',
                  placeholder: 'O dia que finaliza o compromisso',
                  type: FormInputTypeEnum.Date,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: 'Hora do fim',
                  name: 'scheduleEndTime',
                  placeholder: 'A hora que finaliza o compromisso',
                  type: FormInputTypeEnum.Time,
                  isRequired: true,
                }
              },
              {
                select: {
                  label: 'Convidados',
                  name: 'usersId',
                  optionsApi: {
                      endpoint: 'relatedUsers',
                      labelField: 'Documento único | Nome',
                      valueField: 'userId'
                  }
                },
              },
              {
                input: {
                  label: 'Descrição',
                  name: 'scheduleDescription',
                  placeholder: 'Descrição sobre o compromisso',
                  type: FormInputTypeEnum.Text,
                }
              },
              {
                input: {
                  label: 'Meio eletrônico',
                  name: 'scheduleVirtualLocation',
                  placeholder: 'Link para o compromisso',
                  type: FormInputTypeEnum.Text,
                }
              },
            ],
            id: 'mainTab',
          },
          {
            title: 'Local',
            elements: [
                {
                    input: {
                      label: 'Código postal',
                      name: 'scheduleZipcode',
                      placeholder: 'Código postal do local do compromisso',
                      type: FormInputTypeEnum.Text,
                    }
                },
                {
                    input: {
                      label: 'Logradouro',
                      name: 'scheduleAddress',
                      placeholder: 'Logradouro do local do compromisso',
                      type: FormInputTypeEnum.Text,
                    }
                },
                {
                    input: {
                      label: 'Número',
                      name: 'scheduleNúmero',
                      placeholder: 'Número do local do compromisso',
                      type: FormInputTypeEnum.Text,
                    }
                },
                {
                    input: {
                      label: 'Bairro',
                      name: 'scheduleDistrict',
                      placeholder: 'Bairro do local do compromisso',
                      type: FormInputTypeEnum.Text,
                      isDisabled: true,
                    }
                },
                {
                    input: {
                      label: 'Cidade',
                      name: 'scheduleCity',
                      placeholder: 'Cidade do local do compromisso',
                      type: FormInputTypeEnum.Text,
                      isDisabled: true,
                    }
                },
                {
                    input: {
                      label: 'Estado',
                      name: 'scheduleState',
                      placeholder: 'Estado do local do compromisso',
                      type: FormInputTypeEnum.Text,
                      isDisabled: true,
                    }
                },
                {
                    input: {
                      label: 'País',
                      name: 'scheduleCountry',
                      placeholder: 'País do local do compromisso',
                      type: FormInputTypeEnum.Text,
                      isDisabled: true,
                    }
                },
            ],
            id: 'locationTab',
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
      endPoint: 'schedules',
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
