import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const COUNTRY: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'country',
        title: 'Países',
        components: ['countryForm', 'countryTable'],
    }
}