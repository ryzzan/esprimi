import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const PERSON_CLIENT: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:"personClient",
        title: "Pessoas clientes",
        components: ["personClientForm", "personClientTable"],
    }
}