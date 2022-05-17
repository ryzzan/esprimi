import {
  FormButtonTypeEnum,
  FormInputTypeEnum,
  ServiceFunctionsEnum,
} from "../../../src/enums/form";
import {
  BackendFrameworkEnum,
  FrontendFrameworkEnum,
} from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const PERMISSION_GROUP_FORM: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  form: {
    title: "Permissão",
    id: "permissionGroupForm",
    elements: [
      {
        input: {
          label: "Nome",
          name: "name",
          placeholder: "Nome do grupo",
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        input: {
          label: "Descrição",
          name: "description",
          placeholder: "Descrição do grupo",
          type: FormInputTypeEnum.Text,
          isRequired: true,
        },
      },
      {
        array: {
          id: "modulesPermissions",
          title: "Permissões de módulos",
          elements: [
            {
              select: {
                label: "Módulo",
                name: "modules",
                type: FormInputTypeEnum.Text,
                optionsApi: {
                  endpoint: "modules",
                  labelField: "name",
                  valueField: "_id",
                },
                isDisabled: true,
                isMultiple: true,
              },
            },
            {
              select: {
                label: "Permissões",
                name: "permissions",
                type: FormInputTypeEnum.Text,
                optionsApi: {
                  endpoint: "permission-actions",
                  labelField: "name",
                  valueField: "_id",
                },
                isDisabled: true,
                isMultiple: true,
              },
            },
          ],
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
      endPoint: "permission-groups",
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
