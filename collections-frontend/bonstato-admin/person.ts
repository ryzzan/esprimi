import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const PERSON: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'person',
        components: ['personForm', 'personTable'],
    }
}