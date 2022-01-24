import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const METAVERSE: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'metaverse',
        title: 'Metaversos',
        components: ['metaverseForm', 'metaverseTable'],
    }
}