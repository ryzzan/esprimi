import { FormButtonTypeEnum, FormInputTypeEnum, ServiceFunctionsEnum } from "../src/enums/form";
import { FrontendFrameworkEnum } from "../src/enums/main";
import { MainInterface } from "../src/interfaces/main";

export const EXAMPLE_WITHOUT_TABS_FORM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    form: {
        title: 'Título exemplo',
        id: 'exampleForm',
        elements: [{
                input: {
                    label: 'Um input',
                    name: 'oneInput',
                    placeholder: 'Placeholder prum input',
                    type: FormInputTypeEnum.Text,
                    isRequired: true,
                },
            },
            {
                select: {
                    label: 'Um select',
                    name: 'oneSelect',
                    optionsObject: [{
                            label: 'Opção 1',
                            value: 'option1',
                        },
                        {
                            label: 'Opção 2',
                            value: 'option2',
                        },
                    ]
                },
            },
            {
                slide: {
                    label: 'Um slide',
                    name: 'oneSlide',
                    placeholder: 'Placeholder prum slide',
                    type: FormInputTypeEnum.Text
                }
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
            endPoint: 'examples',
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