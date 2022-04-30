import {
    FormInputTypeEnum,
    ServiceFunctionsEnum
} from "../../../src/enums/form";
import {
    FrontendFrameworkEnum
} from "../../../src/enums/main";
import {
    RequestTypeEnum
} from "../../../src/enums/request";
import {
    MainInterface
} from "../../../src/interfaces/main";


export const INVITATION_TABLE: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    table: {
        id: 'invitationTable',
        title: 'Convites',
        data: {
            type: RequestTypeEnum.Object,
        },
        elements: [{
                column: {
                    label: 'Tipo',
                },
                row: {
                    type: 'string',
                    field: 'type',
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
                    label: 'Nome',
                },
                row: {
                    type: 'string',
                    field: 'name',
                },
            },
            {
                column: {
                    label: 'Grupos de permissão',
                },
                row: {
                    type: 'array',
                    field: 'permissionGroups',
                },
            },
            {
                column: {
                    label: 'Ações',
                },
                row: {
                    type: 'menu',
                    icon: 'more_vert',
                    menu: [{
                            action: {
                                type: RequestTypeEnum.Link,
                                url: '/main/invitation/{id}',
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
            id: 'invitationTable',
            title: 'Convite',
            elements: [{
                input: {
                    label: 'E-mail',
                    name: 'email',
                    placeholder: 'E-mail do convidado',
                    type: FormInputTypeEnum.Text
                }
            }, {
                input: {
                    label: 'Nome',
                    name: 'name',
                    placeholder: 'Nome do convidado',
                    type: FormInputTypeEnum.Text
                }
            }]
        },
        service: {
            baseUrl: 'http://localhost:3000',
            endPoint: 'invitations',
            hasAuthorization: true,
            methods: [
                ServiceFunctionsEnum.Get,
                ServiceFunctionsEnum.Delete,
                ServiceFunctionsEnum.Find,
            ],
        },
    },
};