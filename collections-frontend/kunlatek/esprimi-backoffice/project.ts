import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const PROJECT: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  module: {
    id: "project",
    title: "Projetos",
    components: ["projectForm", "projectTable"],
  },
};
