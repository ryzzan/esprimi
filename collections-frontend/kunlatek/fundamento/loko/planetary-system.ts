import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const PLANETARY_SYSTEM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'planetarySystem',
        title: 'Sistemas planetários',
        components: ['planetarySystemForm', 'planetarySystemTable'],
    }
}