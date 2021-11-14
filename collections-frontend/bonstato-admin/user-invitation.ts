import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const USER_INVITATION: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'userInvitation',
        title: 'Convites de usuários',
        components: ['userInvitationForm', 'userInvitationTable'],
    }
}