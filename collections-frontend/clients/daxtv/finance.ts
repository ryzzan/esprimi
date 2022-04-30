import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const FINANCE: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:"finance",
        title: "Financeiros",
        components: ["financeTable"],
    }
}