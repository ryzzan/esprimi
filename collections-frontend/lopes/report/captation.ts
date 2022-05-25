import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const CAPTATION: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  module: {
    id: "captation",
    title: "Captação",
    components: [
      "captationNegotiationList",
      "storeManagementChart",
      "realEstatePurposeChart",
      "stockSaleChart",
      "stockLeaseChart",
      "topValueZoneCaptationChart"
    ],
  },
};
