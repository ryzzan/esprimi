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
                    optionsApi: {
                        endpoint: 'permission-groups',
                        labelField: 'name',
                        valueField: 'id'
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
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app0',
            endPoint: 'permission-groups',
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