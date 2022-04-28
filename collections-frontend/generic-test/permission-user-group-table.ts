import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { RequestTypeEnum } from "../../src/enums/request";
import { MainInterface } from "../../src/interfaces/main";


export const PERMISSION_USER_GROUP_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: 'permissionUserGroupTable',
    title: 'Grupos de permissões de grupos de usuários',
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
      {
        column: {
          label: 'Grupo de permissão',
        },
        row: {
          type: 'string',
          field: 'permissionGroup',
        },
      },
      {
        column: {
          label: 'Grupo de usuário',
        },
        row: {
          type: 'string',
          field: 'userGroup',
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
                url: '/main/permissionUserGroup/{id}',
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
        id: 'permissionUserGroupTable',
        title: 'Grupo de permissão de grupo de usuário',
        elements: [{
            input: {
                label: 'Grupo de permissão',
                name: 'permissionGroupName',
                placeholder: 'Nome do grupo',
                type: FormInputTypeEnum.Text
            }
        }, {
            input: {
                label: 'Grupo de usuário',
                name: 'userGroupName',
                placeholder: 'Nome do grupo',
                type: FormInputTypeEnum.Text
            }
        }]
    },
    service: {
        baseUrl: 'http://localhost:3000',
        endPoint: 'permissionUserGroups',
        hasAuthorization: true,
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
