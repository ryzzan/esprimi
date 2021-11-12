import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const PERMISSION_USER_GROUP: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'permissionUserGroup',
        components: ['permissionUserGroupForm', 'permissionUserGroupTable'],
    }
}