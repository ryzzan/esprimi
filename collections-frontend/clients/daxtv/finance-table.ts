import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../../../src/enums/main";
import { RequestTypeEnum } from "../../../src/enums/request";
import { MainInterface } from "../../../src/interfaces/main";


export const FINANCE_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  comments: "Retorno de API externa",
  table: {
    id: "financeTable",
    title: "Financeiro",
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
      {
        column: {
          label: "Revendedor",
        },
        row: {
          type: "string",
          field: "sellerName",
        },
      },
      {
        column: {
          label: "Tipo de cliente",
        },
        row: {
          type: "string",
          field: "clientType",
        },
      },
      {
        column: {
          label: "Nome do cliente",
        },
        row: {
          type: "string",
          field: "clientName",
        },
      },
      {
        column: {
          label: "Cidade",
        },
        row: {
          type: "string",
          field: "city",
        },
      },
      {
        column: {
          label: "Estado",
        },
        row: {
          type: "string",
          field: "state",
        },
      },
      {
        column: {
          label: "Plano",
        },
        row: {
          type: "string",
          field: "plan",
        },
      },
      {
        column: {
          label: "Extras",
        },
        row: {
          type: "string",
          field: "extras",
        },
      },
      {
        column: {
          label: "Preço",
        },
        row: {
          type: "string",
          field: "price",
        },
      },
      {
        column: {
          label: "Pagamento",
        },
        row: {
          type: "string",
          field: "payDay",
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
                url: "/main/finance",
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
        id: "financeTable",
        title: "Financeiro",
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
        endPoint: "finances",
        hasAuthorization: true,
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
