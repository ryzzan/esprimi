import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const DOCUMENTATION: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'documentation',
        title: 'Documentações',
        components: ['documentationForm', 'documentationTable'],
    }
}