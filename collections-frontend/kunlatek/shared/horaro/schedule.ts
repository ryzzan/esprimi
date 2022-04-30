import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const SCHEDULE: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'schedule',
        title: 'Compromissos',
        components: ['scheduleForm', 'scheduleTable'],
    }
}