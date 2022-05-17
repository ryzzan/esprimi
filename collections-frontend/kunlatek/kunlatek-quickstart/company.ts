import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const COMPANY: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  module: {
    id: "company",
    title: "Empresas",
    components: ["companyForm"],
  },
};
