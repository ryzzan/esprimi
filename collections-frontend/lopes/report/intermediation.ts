import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const INTERMEDIATION: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  module: {
    id: "intermediation",
    title: "Intermediação",
    components: [
      "storeGeneralValueChart",
      "partnershipChart",
      "averageTicketIntermediationChart",
      "topValueZoneIntermediationChart",
      "realEstateTypeChart",
      "saleChampionChart"
    ],
  },
};
