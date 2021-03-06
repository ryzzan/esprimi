import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { RequestTypeEnum } from "../../src/enums/request";
import { MainInterface } from "../../src/interfaces/main";


export const PERMISSION_GROUP_MODEL_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: 'permissionGroupModelTable',
    title: 'Modelos de grupos de permissão',
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
                url: '/main/permissionGroupModel/{id}',
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
        id: 'permissionGroupModelTable',
        title: 'Modelo de grupo de permissão',
        elements: [{
            input: {
                label: 'Grupo modelo',
                name: 'name',
                placeholder: 'nome do grupo modelo',
                type: FormInputTypeEnum.Text
            }
        }]
    },
    service: {
        hasAuthorization: false,
        baseUrl: 'http://devbackadmin.lpsbr.com/api/v1',
        endPoint: 'permissionGroupModels?page=0&size=25&sort=description(asc)',
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
