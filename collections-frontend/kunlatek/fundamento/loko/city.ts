import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const CITY: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'city',
        title: 'Cidades',
        components: ['cityForm', 'cityTable'],
    }
}