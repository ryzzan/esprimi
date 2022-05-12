import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../../../src/enums/main";
import {
  MainInterface,
} from "../../../src/interfaces/main";

export const PERSON_CLIENT_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  backendFramework: BackendFrameworkEnum.Loopback,
  form: {
    title: "Pessoa",
    id: "personClientForm",
    elements: [
      {
        tabs: [
          {
            title: "Dados pessoais",
            elements: [
              {
                input: {
                  label: "CPF",
                  name: "cpf",
                  placeholder: "Apenas números",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                  mask: "000.000.000-00",
                  todo: "Mask validator",
                },
              },
              {
                input: {
                  label: "Nome",
                  name: "name",
                  placeholder: "Nome completo",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: "Data de nascimento",
                  name: "birthday",
                  type: FormInputTypeEnum.Date,
                  isRequired: true,
                },
              },
              {
                select: {
                  label: "Gênero",
                  name: "gender",
                  optionsObject: [
                    {
                      label: "Masculino",
                      value: "Masculino"
                    },
                    {
                      label: "Feminino",
                      value: "Feminino"
                    },
                  ],
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
            ],
            id: "mainTab",
          },
          {
            title: "Contatos",
            elements: [
              {
                input: {
                  label: "E-mail",
                  name: "email",
                  placeholder: "E-mail da empresa",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: "Celular",
                  name: "mobile",
                  placeholder: "Celular da empresa",
                  type: FormInputTypeEnum.Text,
                  mask: "(00)00000-0000",
                },
              },
            ],
            id: "contactTab",
          },
          {
            title: "Endereço",
            id: "addressTab",
            elements: [
              {
                input: {
                  label: "CEP",
                  name: "zipCode",
                  placeholder: "Código postal",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                  mask: "00.000-000",
                  todo: "Validator mask | Address API?",
                }
              },
              {
                input: {
                  label: "Identificador",
                  name: "addressIdentifier",
                  placeholder: "Apelido para o endereço",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                }
              },
              {
                input: {
                  label: "Logradouro",
                  name: "address",
                  placeholder: "Nome da Rua ou Avenida, etc.",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                }
              },
              {
                input: {
                  label: "Número",
                  name: "addressNumber",
                  placeholder: "Número da casa ou prédio",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                }
              },
              {
                input: {
                  label: "Bairro",
                  name: "district",
                  placeholder: "Bairro do logradouro",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                }
              },
              {
                input: {
                  label: "Complemento",
                  name: "addressComplement",
                  placeholder: "Mais informações sobre o endereço",
                  type: FormInputTypeEnum.Text,
                }
              },
              {
                input: {
                  label: "País",
                  name: "addressCountry",
                  placeholder: "País do endereço",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                }
              },
              {
                input: {
                  label: "Estado",
                  name: "addressState",
                  placeholder: "Estado do endereço",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                }
              },
              {
                input: {
                  label: "Cidade",
                  name: "addressCity",
                  placeholder: "Cidade do endereço",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                }
              },
            ],
          },
          {
            title: "Pacotes",
            id: "packTab",
            elements: [
              {
                select: {
                  label: "Plano principal",
                  name: "plan",
                  type: FormInputTypeEnum.Text,
                  optionsObject: [
                    {
                      label: "Plano básico",
                      value: "Plano básico",
                    },
                    {
                      label: "Plano light",
                      value: "Plano light",
                    },
                    {
                      label: "Plano digital",
                      value: "Plano digital",
                    },
                    {
                      label: "Plano top",
                      value: "Plano top",
                    },
                    {
                      label: "Plano premium",
                      value: "Plano premium",
                    },
                  ]
                }
              },
              {
                select: {
                  label: "Extras",
                  name: "extras",
                  type: FormInputTypeEnum.Text,
                  optionsObject: [
                    {
                      label: "Canais HBO",
                      value: "Canais HBO",
                    },
                    {
                      label: "Canais Telecine",
                      value: "Canais Telecine",
                    },
                    {
                      label: "Sexprivé",
                      value: "Sexprivé",
                    },
                  ],
                  isMultiple: true,
                }
              },
              {
                input: {
                  label: "Telas",
                  name: "quantity",
                  placeholder: "Contas por plano",
                  type: FormInputTypeEnum.Number,
                  isRequired: true,
                }
              },
            ]
          },
          {
            title: "Resumo",
            id: "briefTab",
            todo: "Table with bill briefing",
            elements: []
          }
        ],
      },
    ],
    actions: [
      {
        button: {
          label: "Criar",
          type: FormButtonTypeEnum.Submit,
          icon: "save",          
        },
      },
    ],
    service: {
      baseUrl: "http://localhost:3000",
      endPoint: "person-clients",
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
