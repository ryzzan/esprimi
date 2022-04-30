import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const COMPANY_CLIENT: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:"companyClient",
        title: "Empresas clientes",
        components: ["companyClientForm", "companyClientTable"],
    }
}