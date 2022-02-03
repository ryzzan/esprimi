import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { RequestTypeEnum } from "../../../src/enums/request";
import { MainInterface } from "../../../src/interfaces/main";


export const PLANET_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: 'planetTable',
    title: 'Planetas',
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
      {
        column: {
          label: 'Nome',
        },
        row: {
          type: 'string',
          field: 'name',
        },
      },
      {
        column: {
          label: 'Sistema planetário',
        },
        row: {
          type: 'string',
          field: 'planetarySystemName',
        },
      },
      {
        column: {
          label: 'Descrição',
        },
        row: {
          type: 'string',
          field: 'description',
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
                url: '/main/planet',
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
        id: 'planetTable',
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
        baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app0',
        endPoint: 'planets',
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
