import { FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { RequestTypeEnum } from "../../src/enums/request";
import { MainInterface } from "../../src/interfaces/main";


export const PERSON_TABLE: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  table: {
    id: 'personTable',
    title: 'Pessoas',
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
          label: 'Nascimento',
        },
        row: {
          type: 'date',
          field: 'birthday',
        },
      },
      {
        column: {
          label: 'Gênero',
        },
        row: {
          type: 'string',
          field: 'gender',
        },
      },
      {
        column: {
          label: 'E-mail',
        },
        row: {
          type: 'string',
          field: 'email',
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
                url: '/main/person/123',
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
        id: 'personTable',
        title: 'Pessoa',
        elements: [
          {
            input: {
              label: 'Nome',
              placeholder: 'Pesquisar por nome',
              name: 'name',
              type: FormInputTypeEnum.Text,
            },
          },
          {
            select: {
              label: 'Gênero',
              name: 'gender',
              optionsObject: [
                {
                  label: 'Masculino',
                  value: 'M',
                },
                {
                  label: 'Feminino',
                  value: 'F',
                },
              ],
            },
          },
        ],
    },
    service: {
        baseUrl: 'http://localhost:3000',
        endPoint: 'people',
        methods: [
            ServiceFunctionsEnum.Get,
            ServiceFunctionsEnum.Delete,
            ServiceFunctionsEnum.Find,
        ],
    },
  },
};
