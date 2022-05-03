import {
  FormButtonTypeEnum,
  FormInputTypeEnum,
  ServiceFunctionsEnum
} from "../../../../src/enums/form";
import {
  BackendFrameworkEnum,
  FrontendFrameworkEnum
} from "../../../../src/enums/main";
import {
  MainInterface,
} from "../../../../src/interfaces/main";

export const MODULE_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  // backendFramework: BackendFrameworkEnum.Loopback,
  form: {
    title: "Módulo",
    id: "moduleForm",
    elements: [
      // {
      //   select: {
      //     label: "Projeto",
      //     name: "projectId",
      //     type: FormInputTypeEnum.Text,
      //     optionsApi: {
      //       endpoint: "projects",
      //       labelField: "name",
      //       valueField: "_id"
      //     },
      //     isRequired: true,
      //   },
      // },
      {
        autocomplete: {
          label: "Projeto",
          name: "projectId",
          type: FormInputTypeEnum.Text,
          optionsApi: {
            endpoint: "projects",
            labelField: "name",
            valueField: "_id",
            paramsToFilter: ["name", "description"]
          },
          isRequired: true,
        },
      },
      {
        input: {
          label: "Nome",
          name: "name",
          placeholder: "Nome do módulo",
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        input: {
          label: "Rota",
          name: "route",
          placeholder: "Rota de frontend para o módulo",
          type: FormInputTypeEnum.Text,
        },
      },
      {
        input: {
          label: "Collection",
          name: "collection",
          placeholder: "Pascalfy",
          type: FormInputTypeEnum.Text,
        },
      },
      {
        input: {
          label: "Descrição",
          name: "description",
          placeholder: "Breve descrição do módulo",
          type: FormInputTypeEnum.Text,
        },
      },
    ],
    actions: [{
      button: {
        label: "Criar",
        type: FormButtonTypeEnum.Submit,
        icon: "save",
      },
    }, ],
    service: {
      hasAuthorization: true,
      baseUrl: "http://localhost:3000",
      endPoint: "modules",
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