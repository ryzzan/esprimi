import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { RequestTypeEnum } from "../../src/enums/request";
import { MainInterface } from "../../src/interfaces/main";


export const USER_GROUP_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: 'userGroupTable',
    title: 'Grupos de usuários',
    data: {
      type: RequestTypeEnum.Object,
    },
    elements: [
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
          label: 'Nome do grupo',
        },
        row: {
          type: 'string',
          field: 'name',
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
                url: '/main/user-group',
                param: 'uuid'
              },
              label: 'Editar',
            },
            {
              action: {
                type: RequestTypeEnum.Dialog,
                param: 'uuid'
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
        id: 'userGroupTable',
        title: 'Grupo de usuário',
        elements: [{
            input: {
                label: 'Nome',
                name: 'name',
                placeholder: 'Nome do grupo',
                type: FormInputTypeEnum.Text
            }
        }]
    },
    service: {
        baseUrl: 'http://devbackadmin.lpsbr.com:/api/v1',
        endPoint: 'user-groups?sort=description (asc)&page=0&size=25',
        hasAuthorization: true,
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
