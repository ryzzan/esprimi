import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const OBJECTIVE: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'objective',
        title: 'Objetivos',
        components: ['objectiveForm', 'objectiveTable'],
    }
}