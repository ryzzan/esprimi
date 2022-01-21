import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const SIGNUP: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'signup',
        title: 'Cadastro',
        components: ['signupForm'],
    }
}