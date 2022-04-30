import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../../../src/enums/main";
import { RequestTypeEnum } from "../../../src/enums/request";
import { MainInterface } from "../../../src/interfaces/main";


export const COMPANY_CLIENT_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: "companyClientTable",
    title: "Empresas",
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
      {
        column: {
          label: "Nome fantasia",
        },
        row: {
          type: "string",
          field: "businessName",
        },
      },
      {
        column: {
          label: "Celular",
        },
        row: {
          type: "string",
          field: "mobile",
        },
      },
      {
        column: {
          label: "E-mail",
        },
        row: {
          type: "string",
          field: "email",
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
          label: "Telas",
        },
        row: {
          type: "string",
          field: "quantity",
        },
      },
      {
        column: {
          label: "Utilizados",
          comment: "Ask the difference between quantity and used"
        },
        row: {
          type: "string",
          field: "used",
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
                url: "/main/company_client",
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
        id: "companyClientTable",
        title: "Empresas",
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
        endPoint: "company-clients",
        hasAuthorization: true,
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
