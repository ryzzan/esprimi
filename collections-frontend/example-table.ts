import { FormInputTypeEnum, ServiceFunctionsEnum } from "../src/enums/form";
import { FrontendFrameworkEnum } from "../src/enums/main";
import { RequestTypeEnum } from "../src/enums/request";
import { MainInterface } from "../src/interfaces/main";


export const EXAMPLE_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: 'exampleTable',
    title: 'Exemplos',
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
      {
        column: {
          label: 'Input',
        },
        row: {
          type: 'string',
          field: 'oneInput',
        },
      },
      {
        column: {
          label: 'Select',
        },
        row: {
          type: 'date',
          field: 'oneSelect',
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
                url: '/main/example/123',
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
        id: 'exampleTable',
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
        baseUrl: 'localhost:3000',
        endPoint: 'examples',
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Update,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
