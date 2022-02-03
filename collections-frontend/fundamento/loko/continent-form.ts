import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const CONTINENT_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Continente',
        id: 'continentForm',
        elements: [{
                select: {
                    label: 'Planeta',
                    name: 'planetId',
                    optionsApi: {
                        endpoint: 'planets',
                        labelField: 'name',
                        valueField: '_id',
                    }
                }
            }, {
                input: {
                    label: 'Nome',
                    name: 'name',
                    placeholder: 'Nome do continente',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Descrição',
                    name: 'description',
                    placeholder: 'Breve descrição do continente',
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
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app0',
            endPoint: 'continents',
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