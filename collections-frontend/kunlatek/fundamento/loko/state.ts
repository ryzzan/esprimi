import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const STATE: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'state',
        title: 'Estados',
        components: ['stateForm', 'stateTable'],
    }
}