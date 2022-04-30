import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const ADDRESS: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'address',
        title: 'Endereços',
        components: ['addressForm', 'addressTable'],
    }
}