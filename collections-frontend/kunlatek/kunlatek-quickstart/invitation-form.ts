import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const INVITATION_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Convite',
        id: 'invitationForm',
        elements: [
            {
                select: {
                    label: 'Tipo',
                    name: 'type',
                    type: FormInputTypeEnum.Text,
                    optionsObject: [{
                        label: 'Pessoa',
                        value: 'person'
                    }, {
                        label: 'Empresa',
                        value: 'company'
                    }]
                },
            },
            {
                input: {
                    label: 'E-mail',
                    name: 'email',
                    placeholder: 'O e-mail do convidado',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Nome',
                    name: 'name',
                    placeholder: 'O nome do convidado',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                select: {
                    label: 'Grupos de permissão',
                    name: 'permissionGroups',
                    type: FormInputTypeEnum.Text,
                    optionsApi: {
                        endpoint: 'permission-groups',
                        labelField: 'name',
                        valueField: '_id'
                    },
                    isMultiple: true
                },
            }
        ],
        actions: [{
            button: {
                label: 'Criar',
                type: FormButtonTypeEnum.Submit,
                icon: 'save',
            },
        }, ],
        service: {
            baseUrl: 'http://localhost:3000',
            endPoint: 'permission-groups',
            hasAuthorization: true,
            methods: [
                ServiceFunctionsEnum.Get,
                ServiceFunctionsEnum.Delete,
                ServiceFunctionsEnum.Save,
                ServiceFunctionsEnum.Update,
                ServiceFunctionsEnum.Find,
            ],
        },
    },
};