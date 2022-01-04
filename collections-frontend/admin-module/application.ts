import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const APPLICATION: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        title: 'Aplicações',
        id:'application',
        components: ['applicationForm', 'applicationTable'],
    }
}