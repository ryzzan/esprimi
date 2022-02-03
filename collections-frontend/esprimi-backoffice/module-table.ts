import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { RequestTypeEnum } from "../../src/enums/request";
import { MainInterface } from "../../src/interfaces/main";


export const MODULE_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: 'moduleTable',
    title: 'Módulos',
    data: {
      type: RequestTypeEnum.Api,
    },
    elements: [
      {
        column: {
          label: 'Título',
        },
        row: {
          type: 'string',
          field: 'title',
        },
      },
      {
        column: {
          label: 'Identidade',
        },
        row: {
          type: 'string',
          field: 'id',
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
                url: '/main/module',
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
        id: 'moduleTable',
        title: 'Módulo',
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
        baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app0',
        endPoint: 'modules',
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
