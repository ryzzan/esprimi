import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from '../../src/enums/form';
import { FrontendFrameworkEnum } from '../../src/enums/main';
import {
  MainInterface,
} from '../../src/interfaces/main';

export const MODULE_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Módulo',
        id: 'moduleForm',
        elements: [{
                input: {
                    label: 'Módulo',
                    name: 'module',
                    placeholder: 'Nome do módulo',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
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
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app',
            endPoint: 'modules',
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