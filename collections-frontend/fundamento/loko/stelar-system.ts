import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const STELAR_SYSTEM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'stelarSystem',
        title: 'Sistemas estelares',
        components: ['stelarSystemForm', 'stelarSystemTable'],
    }
}