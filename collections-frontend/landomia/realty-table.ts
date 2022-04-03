import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { RequestTypeEnum } from "../../src/enums/request";
import { MainInterface } from "../../src/interfaces/main";


export const REALTY_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: 'realtyTable',
    title: 'Imóveis',
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
      {
        column: {
          label: 'Proprietário',
        },
        row: {
          type: 'string',
          field: 'name',
        },
      },
      {
        column: {
          label: 'Tipo de imóvel',
        },
        row: {
          type: 'string',
          field: 'realtyType',
        },
      },
      {
        column: {
          label: 'Tipo de negócio',
        },
        row: {
          type: 'string',
          field: 'businessType',
        },
      },
      {
        column: {
          label: 'Contatos',
        },
        row: {
          type: 'string',
          field: 'contacts',
        },
      },
      {
        column: {
          label: 'Ações',
        },
        row: {
          type: 'menu',
          icon: 'more_vert',
          menu: [
            {
              action: {
                type: RequestTypeEnum.Link,
                url: '/main/realty',
                param: '_id'
              },
              label: 'Editar',
            },
            {
              action: {
                type: RequestTypeEnum.Dialog,
              },
              label: 'Remover',
              dialog: {
                templateFolder: 'remove-confirmation-dialog',
                id: 'removeConfirmationDialog',
              },
            },
          ],
        },
      },
    ],
    actions: {
        id: 'realtyTable',
        title: 'Exemplo',
        elements: [{
            input: {
                label: 'Search input',
                name: 'searchInput',
                placeholder: 'Placeholder to search input',
                type: FormInputTypeEnum.Text
            }
        }]
    },
    service: {
        baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app',
        endPoint: 'realties',
        hasAuthorization: true,
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
