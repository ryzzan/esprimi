import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const GALAXY: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'galaxy',
        title: 'Galáxias',
        components: ['galaxyForm', 'galaxyTable'],
    }
}