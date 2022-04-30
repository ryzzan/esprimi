import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { FrontendFrameworkEnum } from "../../../src/enums/main";
import {
  MainInterface,
} from "../../../src/interfaces/main";

export const COMPANY_CLIENT_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: "Empresa",
    id: "companyClientForm",
    elements: [
      {
        tabs: [
          {
            title: "Dados da empresa",
            elements: [
              {
                input: {
                  label: "CNPJ",
                  name: "cnpj",
                  placeholder: "Apenas números",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                  todo: "Mask validator",
                },
              },
              {
                input: {
                  label: "Nome fantasia",
                  name: "businessName",
                  placeholder: "Nome comercial",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: "Razão social",
                  name: "companyName",
                  placeholder: "Nome jurídico",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: "Nome do responsável",
                  name: "ownerName",
                  placeholder: "Responsável pela empresa",
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
                  label: "Identificador",
                  name: "contactIdentifier",
                  placeholder: "Apelido para o contato",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                select: {
                  label: "Tipo de contato",
                  name: "contactType",
                  type: FormInputTypeEnum.Text,
                  optionsObject: [
                    {
                      label: "Celular",
                      value: "mobile",
                    },
                    {
                      label: "E-mail",
                      value: "email",
                    },
                    {
                      label: "Telefone",
                      value: "phone",
                    },
                    {
                      label: "Rede social",
                      value: "socialMedia",
                    },
                  ],
                  isRequired: true,
                },
              },
              {
                input: {
                  label: "Valor",
                  name: "contactValue",
                  placeholder: "Valor correspondente ao contato",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                },
              },
              {
                input: {
                  label: "Complemento",
                  name: "contactComplement",
                  placeholder: "Informação adicional do contato",
                  type: FormInputTypeEnum.Text,
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
      endPoint: "examples",
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
