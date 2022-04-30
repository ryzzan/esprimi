import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const PLANET: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'planet',
        title: 'Planetas',
        components: ['planetForm', 'planetTable'],
    }
}