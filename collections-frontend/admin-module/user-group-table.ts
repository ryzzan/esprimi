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
          label: 'Nome do grupo',
        },
        row: {
          type: 'string',
          field: 'name',
        },
      },
      {
        column: {
          label: 'Usuários',
        },
        row: {
          type: 'string',
          field: 'users',
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
                url: '/main/userGroup/{id}',
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
        baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app0',
        endPoint: 'userGroups',
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
