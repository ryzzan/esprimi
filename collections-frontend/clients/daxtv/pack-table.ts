import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { RequestTypeEnum } from "../../../src/enums/request";
import { MainInterface } from "../../../src/interfaces/main";


export const PACK_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: "packTable",
    title: "Pacotes",
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
      {
        column: {
          label: "Nome",
        },
        row: {
          field: "name",
        },
      },
      {
        column: {
          label: "Canais",
        },
        row: {
          field: "channels",
        },
      },
      {
        column: {
          label: "Preço",
        },
        row: {
          field: "price",
        },
      },
      {
        column: {
          label: "Telas",
        },
        row: {
          field: "screenQuantity",
        },
      },
      {
        column: {
          label: "Gravação",
        },
        row: {
          field: "recordingTime",
        },
      },
      {
        column: {
          label: "Ações",
        },
        row: {
          type: "menu",
          icon: "more_vert",
          menu: [
            {
              action: {
                type: RequestTypeEnum.Link,
                url: "/main/pack",
                param: "_id",
              },
              label: "Editar",
            },
            {
              action: {
                type: RequestTypeEnum.Dialog,
                param: "_id",
              },
              label: "Remover",
              dialog: {
                templateFolder: "remove-confirmation-dialog",
                id: "removeConfirmationDialog",
              },
            },
          ],
        },
      },
    ],
    actions: {
        id: "packTable",
        title: "Pacote",
        elements: [{
            input: {
                label: "Search input",
                name: "searchInput",
                placeholder: "Placeholder to search input",
                type: FormInputTypeEnum.Text
            }
        }]
    },
    service: {
        baseUrl: "http://localhost:3000",
        endPoint: "packs",
        hasAuthorization: true,
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
