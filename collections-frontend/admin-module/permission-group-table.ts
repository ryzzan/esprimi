import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { RequestTypeEnum } from "../../src/enums/request";
import { MainInterface } from "../../src/interfaces/main";


export const PERMISSION_GROUP_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: 'permissionGroupTable',
    title: 'Grupos de permissão',
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
      {
        column: {
          label: 'Nome do grupo',
        },
        row: {
          type: 'string',
          field: 'name',
        },
      },
      {
        column: {
          label: 'Módulo',
        },
        row: {
          type: 'string',
          field: 'module',
        },
      },
      {
        column: {
          label: 'Aplicativo',
        },
        row: {
          type: 'string',
          field: 'application',
        },
      },
      {
        column: {
          label: 'Permissões',
        },
        row: {
          type: 'string',
          field: 'permissions',
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
                url: '/main/permissionGroup/{id}',
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
        id: 'permissionGroupTable',
        title: 'Grupo de permissão',
        elements: [{
            input: {
                label: 'Grupo modelo',
                name: 'name',
                placeholder: 'Nome do grupo',
                type: FormInputTypeEnum.Text
            }
        }]
    },
    service: {
        hasAuthorization: false,
        baseUrl: 'http://devbackadmin.lpsbr.com/api/v1',
        endPoint: 'permissionGroups?page=0&size=25&sort=description(asc)',
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
