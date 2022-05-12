import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { RequestTypeEnum } from "../../../src/enums/request";
import { MainInterface } from "../../../src/interfaces/main";

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
          type: 'array',
          field: 'modules',
        },
      },
      {
        column: {
          label: 'Permissões',
        },
        row: {
          type: 'array',
          field: 'permissionActions',
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
                url: '/main/permission-group',
                param: '_id'
              },
              label: 'Editar',
            },
            {
              action: {
                type: RequestTypeEnum.Dialog,
                param: '_id'
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
        baseUrl: 'http://localhost:3000',
        endPoint: 'permission-groups',
        hasAuthorization: true,
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
