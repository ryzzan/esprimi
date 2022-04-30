import { FrontendFrameworkEnum } from "../../../../src/enums/main";
import { MainInterface } from "../../../../src/interfaces/main";

export const OCCUPATION: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'occupation',
        title: 'Ocupações',
        components: ['occupationForm', 'occupationTable'],
    }
}