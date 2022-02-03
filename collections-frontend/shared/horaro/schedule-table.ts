import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { RequestTypeEnum } from "../../../src/enums/request";
import { MainInterface } from "../../../src/interfaces/main";


export const SCHEDULE_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  comments: '1 - Código para confirmação de atendimento',
  table: {
    id: 'scheduleTable',
    title: 'Compromissos',
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
      {
        column: {
          label: 'Título',
        },
        row: {
          type: 'string',
          field: 'scheduleName',
        },
      },
      {
        column: {
          label: 'Início',
        },
        row: {
          type: 'dateTime',
          field: 'dateTimeStart',
        },
      },
      {
        column: {
          label: 'Fim',
        },
        row: {
          type: 'dateTime',
          field: 'dateTimeEnd',
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
                url: '/main/schedule/{id}',
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
        id: 'scheduleTable',
        title: 'Compromisso',
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
        endPoint: 'schedules',
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};