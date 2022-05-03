import {
  FormButtonTypeEnum,
  FormInputTypeEnum,
  ServiceFunctionsEnum,
} from "../../src/enums/form";
import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const CHARACTER_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  backendFramework: BackendFrameworkEnum.Loopback,
  form: {
    title: "Personagem",
    id: "characterForm",
    elements: [
      {
        tabs: [
          {
            title: "Dados principais",
            id: "mainTab",
            elements: [
              {
                autocomplete: {
                  label: "Animação",
                  placeholder: "Animação do personagem",
                  name: "animationId",
                  type: FormInputTypeEnum.Text,
                  optionsApi: {
                    endpoint: "animations",
                    labelField: "name",
                    valueField: "_id",
                    paramsToFilter: ["name", "startDate"],
                  },
                  isRequired: true,
                },
              },
              {
                input: {
                  label: "Nome",
                  placeholder: "Nome do personagem",
                  name: "name",
                  type: FormInputTypeEnum.Text,
                  isRequired: true,
                }
              },
            ],
          },
          {
            title: "Mais detalhes",
            id: "moreTab",
            elements: [
              {
                array: {
                  title: "Relação com personagem",
                  id: "characterArray",
                  elements: [
                    {
                      autocomplete: {
                        label: "Personagem",
                        placeholder: "Nome de personagem",
                        name: "charcaterId",
                        type: FormInputTypeEnum.Text,
                        optionsApi: {
                          endpoint: "animations",
                          labelField: "name",
                          valueField: "_id",
                          paramsToFilter: ["name", "startDate"],
                        },
                      },
                    },
                    {
                      select: {
                        label: "Relação",
                        name: "otherSelect",
                        type: FormInputTypeEnum.Text,
                        optionsObject: [
                          {
                            label: "Parente",
                            value: "Parente",
                          },
                          {
                            label: "Amigo",
                            value: "Amigo",
                          },
                          {
                            label: "Inimigo",
                            value: "Inimigo",
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                input: {
                  label: "História",
                  placeholder: "História do personagem",
                  name: "history",
                  type: FormInputTypeEnum.Text,
                  isMultipleLines: true,
                }
              },
            ],
          },
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
      endPoint: "characters",
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
