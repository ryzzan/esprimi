import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../../src/enums/form";
import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const COUNTRY_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'País',
        id: 'countryForm',
        elements: [{
                select: {
                    label: 'Continente',
                    name: 'continentId',
                    optionsApi: {
                        endpoint: 'continents',
                        labelField: 'name',
                        valueField: '_id',
                    }
                }
            }, {
                input: {
                    label: 'Nome',
                    name: 'name',
                    placeholder: 'Nome do país',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Descrição',
                    name: 'description',
                    placeholder: 'Breve descrição do país',
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
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app',
            endPoint: 'countries',
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