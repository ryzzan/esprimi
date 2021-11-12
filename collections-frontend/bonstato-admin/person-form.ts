import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../src/enums/form';
import { FrontendFrameworkEnum } from '../../src/enums/main';
import {
  MainInterface,
} from '../../src/interfaces/main';

export const PERSON_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: 'Pessoa',
    id: 'personForm',
    elements: [
      {
        tabs: [
          {
            title: 'Dados principais',
            elements: [
              {
                input: {
                  label: 'CPF',
                  name: 'uniqueId',
                  placeholder: 'Apenas números',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,                  
                },
              },
              {
                input: {
                  label: 'Nome',
                  name: 'name',
                  placeholder: 'Nome completo',
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: 'Nascimento',
                  name: 'birthdate',
                  placeholder: 'dd/mm/aaaa',
                  type: FormInputTypeEnum.Date,
                  isRequired: true,
                },
              },
              {
                select: {
                  label: 'Gênero',
                  name: 'gender',
                  optionsObject: [
                    {
                      label: 'Masculino',
                      value: 'male',
                    },
                    {
                      label: 'Feminino',
                      value: 'female',
                    },
                  ],
                  isRequired: true,
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
          {
            title: 'Dados de acesso',
            elements: [
              {
                select: {
                  label: 'Grupo de permissão',
                  name: 'permissionGroupId',
                  optionsObject: [
                    {
                      label: 'Administrador',
                      value: 'Administrador',
                    },
                    {
                      label: 'Editor',
                      value: 'Editor',
                    },
                    {
                      label: 'Leitor',
                      value: 'Leitor',
                    },
                  ],
                },
              },
              {
                slide: {
                  label: 'Bloqueado',
                  name: 'blocked',
                  placeholder: 'Tirar acesso desta pessoa',
                  type: FormInputTypeEnum.Text,      
                },
              },
            ],
            id: 'access',
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
      endPoint: 'people',
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
