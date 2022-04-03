import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { RequestTypeEnum } from "../../src/enums/request";
import { MainInterface } from "../../src/interfaces/main";


export const TASK_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: 'taskTable',
    title: 'Tarefas',
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
      {
        column: {
            label: 'Projeto',
        },
        row: {
            type: 'string',
            field: 'projectId',
        },
      },
      {
        column: {
            label: 'Objeto',
        },
        row: {
            type: 'string',
            field: 'objectId',
        },
      },
      {
        column: {
          label: 'Resultado chave',
        },
        row: {
          type: 'string',
          field: 'keyResultId',
        },
      },
      {
        column: {
          label: 'Tarefa',
        },
        row: {
          type: 'string',
          field: 'name',
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
                url: '/main/task',
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
        id: 'taskTable',
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
        endPoint: 'tasks',
        hasAuthorization: true,
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
