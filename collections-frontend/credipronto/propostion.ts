import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const PROPOSTION: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'proposition',
        title: 'Proposta',
        components: ['buyerForm', 'realtyForm'],
    }
}