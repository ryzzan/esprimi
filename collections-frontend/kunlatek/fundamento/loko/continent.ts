import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const CONTINENT: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'continent',
        title: 'Continentes',
        components: ['continentForm', 'continentTable'],
    }
}