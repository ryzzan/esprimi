import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const PACK: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:"pack",
        title: "Pacotes",
        components: ["packForm", "packTable"],
    }
}