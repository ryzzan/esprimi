import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../../src/enums/form";
import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const REALTY_TYPE_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Tipo de imóvel',
        id: 'realtyTypeForm',
        elements: [
            {
                input: {
                    label: 'Nome',
                    name: 'name',
                    placeholder: 'Nome do tipo de imóvel',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                input: {
                    label: 'Descrição',
                    name: 'description',
                    placeholder: 'Breve descrição do tipo de imóvel',
                    type: FormInputTypeEnum.Text,
                },
            },
        ],
        actions: [
            {
                button: {
                    label: 'Criar',
                    type: FormButtonTypeEnum.Submit,
                    icon: 'save',
                },
            }, 
        ],
        service: {
            baseUrl: 'https://kunlatek-quickstart-api-tftftsuywa-uc.a.run.app',
            endPoint: 'realtyTypes',
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