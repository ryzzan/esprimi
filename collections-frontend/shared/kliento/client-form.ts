import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../../src/enums/form';
import { FrontendFrameworkEnum } from '../../../src/enums/main';
import {
  MainInterface,
} from '../../../src/interfaces/main';

export const CLIENT_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  comments: 'Only to edit, not to create. Add data to client created via Bonstato client app and related to company via schedule',
  form: {
    title: 'Cliente',
    id: 'clientForm',
    elements: [
      {
        tabs: [
          {
            title: 'Dados principais',
            elements: [
              {
                input: {
                  label: 'Tipo de cliente',
                  name: 'userType',
                  placeholder: 'Pessoa ou empresa',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                  isDisabled: true,
                },
              },
              {
                input: {
                  label: 'Documento único',
                  name: 'uniqueId',
                  placeholder: 'Apenas números',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                  isDisabled: true,
                }
              },
              {
                input: {
                  label: 'Nascimento',
                  name: 'birthdate',
                  placeholder: 'dd/mm/aaaa',
                  type: FormInputTypeEnum.Date,
                  isRequired: true,
                  isDisabled: true,
                },
              },
              {
                input: {
                  label: 'Nome',
                  name: 'name',
                  placeholder: 'Nome completo',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                  isDisabled: true,
                },
              },
              {
                input: {
                  label: 'Gênero',
                  name: 'gender',
                  placeholder: 'Gênero oficial',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                  isDisabled: true,
                },
              },
              {
                input: {
                  label: 'Nome social',
                  name: 'socialName',
                  placeholder: 'Nome escolhido',
                  type: FormInputTypeEnum.Text,
                  isDisabled: true,
                },
              },
              {
                input: {
                  label: 'Gênero social',
                  name: 'socialGender',
                  placeholder: 'Gênero escolhido',
                  type: FormInputTypeEnum.Text,
                  isDisabled: true,
                },
              },
              {
                input: {
                  label: 'Sexo',
                  name: 'biologicalSex',
                  placeholder: 'Sexo biológico',
                  type: FormInputTypeEnum.Text,
                  isDisabled: true,
                },
              },
            ],
            id: 'main',
          },
          {
            title: 'Contatos',
            elements: [
              {
                array: {
                  id: 'contacts',
                  title: 'Contato',
                  elements: [{
                    select: {
                      label: 'Tipo de contato',
                      name: 'contactType',
                      optionsObject: [
                        {
                          label: 'Celular',
                          value: 'mobile',
                        },
                        {
                          label: 'E-mail',
                          value: 'email',
                        },
                        {
                          label: 'Facebook',
                          value: 'facebook',
                        },
                        {
                          label: 'Linkedin',
                          value: 'linkedin',
                        },
                      ],
                    },
                  },
                  {
                    input: {
                      label: 'Valor',
                      name: 'value',
                      placeholder: 'Valor do contato',
                      type: FormInputTypeEnum.Text,
                    },
                  },
                  {
                    input: {
                      label: 'Complemento',
                      name: 'complement',
                      placeholder: 'Mais informações sobre o contato',
                      type: FormInputTypeEnum.Text,
                    },
                  },]
                }
              },
            ],
            id: 'contacts',
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
      baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app0',
      endPoint: 'clients',
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
