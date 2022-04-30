import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const STELAR_SYSTEM_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Sistema estelar',
        id: 'stelarSystemForm',
        elements: [{
                select: {
                    label: 'Galáxia',
                    name: 'galaxyId',
                    type: FormInputTypeEnum.Text,
                    optionsApi: {
                        endpoint: 'galaxies',
                        labelField: 'name',
                        valueField: '_id',
                        todo: 'default as Via Láctea'
                    }
                }
            }, {
                input: {
                    label: 'Nome',
                    name: 'name',
                    placeholder: 'Nome do sistema estelar',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Descrição',
                    name: 'description',
                    placeholder: 'Breve descrição do sistema estelar',
                    type: FormInputTypeEnum.Text,
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
            endPoint: 'stelarSystems',
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