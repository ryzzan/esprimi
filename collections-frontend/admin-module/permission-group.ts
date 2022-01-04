import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const PERMISSION_GROUP: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'permissionGroup',
        title: 'Grupos de permissões',
        components: ['permissionGroupForm', 'permissionGroupTable'],
    }
}