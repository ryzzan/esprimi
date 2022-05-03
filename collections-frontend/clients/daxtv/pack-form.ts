import {
  FormButtonTypeEnum,
  FormInputTypeEnum,
  ServiceFunctionsEnum,
} from "../../../src/enums/form";
import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const PACK_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: "Planos e extras",
    id: "packForm",
    elements: [
      {
        input: {
          label: "Nome",
          name: "name",
          placeholder: "Nome promocional do pacote",
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        select: {
          label: "Tipo de plano",
          name: "type",
          type: FormInputTypeEnum.Text,
          optionsObject: [
            {
              label: "Principal",
              value: "Principal",
            },
            {
              label: "Extra",
              value: "Extra",
            },
          ],
        },
      },
      {
        input: {
          label: "Preço",
          name: "price",
          placeholder: "Preço do pacote",
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        input: {
          label: "Número de canais",
          name: "channelsQuantity",
          placeholder: "Número de canais no pacote",
          type: FormInputTypeEnum.Number,
          isRequired: true,
        },
      },
      {
        input: {
          label: "Número de telas",
          name: "screensQuantity",
          placeholder: "Quantidade de acesso por pacote",
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        input: {
          label: "Horas de gravação",
          name: "recordingTime",
          placeholder: "Tempo de gravação disponível",
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        select: {
          label: "Pacotes Youcast",
          name: "youcastPacks",
          type: FormInputTypeEnum.Text,
          isMultiple: true,
          optionsApi: {
            endpoint: 'youcast',
            labelField: 'nameFromYoucast',
            valueField: 'otherNameFromyoucast'
          },
          todo: 'Ask youcast account for API access'
        },
      },
      {
        input: {
          label: "Descrição",
          name: "description",
          placeholder: "Descrição comercial do pacote",
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
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
      endPoint: "packs",
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
