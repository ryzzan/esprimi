import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const USER_GROUP: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'userGroup',
        components: ['userGroupForm', 'userGroupTable'],
    }
}