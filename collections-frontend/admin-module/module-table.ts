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
          label: 'Código',
        },
        row: {
          type: 'string',
          field: 'code',
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
          label: 'Ações',
        },
        row: {
          type: 'menu',
          icon: 'more_vert',
          menu: [
            {
              action: {
                type: RequestTypeEnum.Link,
                url: '/main/module/{id}',
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
                label: 'Módulo',
                name: 'module',
                placeholder: 'Nome do módulo',
                type: FormInputTypeEnum.Text
            }
        }]
    },
    service: {
        hasAuthorization: false,
        baseUrl: 'http://devbackadmin.lpsbr.com/api/v1',
        endPoint: 'modules?page=0&size=25&sort=description(asc)',
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
