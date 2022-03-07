import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { RequestTypeEnum } from "../../src/enums/request";
import { MainInterface } from "../../src/interfaces/main";


export const APPLICATION_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: 'applicationTable',
    title: 'Aplicações',
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
      {
        column: {
          label: 'Aplicação',
        },
        row: {
          type: 'string',
          field: 'name',
        },
      },
      {
        column: {
          label: 'UUID',
        },
        row: {
          type: 'string',
          field: 'uuid',
        },
      },
      {
        column: {
          label: 'Módulo',
        },
        row: {
          type: 'string',
          field: 'module.name',
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
                url: '/main/application/{id}',
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
        id: 'applicationTable',
        title: 'Aplicações',
        elements: [
          {
            input: {
                label: 'Aplicação',
                name: 'name',
                placeholder: 'Nome da aplicação',
                type: FormInputTypeEnum.Text
            }
          },
          {
            input: {
                label: 'Descrição',
                name: 'description',
                placeholder: 'Descrição da aplicação',
                type: FormInputTypeEnum.Text
            }
          },
          {
            input: {
                label: 'Código',
                name: 'code',
                placeholder: 'Código da aplicação',
                type: FormInputTypeEnum.Text
            }
          }
        ]
    },
    service: {
        hasAuthorization: false,
        baseUrl: 'http://devbackadmin.lpsbr.com/api/v1',
        endPoint: 'applications?page=0&size=25&sort=description(asc)',
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
