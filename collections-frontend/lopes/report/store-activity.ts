import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const STORE_ACITVITY: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:"storeActivity",
        title: "Captações",
        components: ["storeActivityChart"],
    }
};