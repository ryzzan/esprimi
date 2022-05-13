import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const PROPOSAL_NEGOTIATION: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  module: {
    id: "proposalNegotiation",
    title: "Cards de propostas",
    components: [
      "proposalNegotiationList",
      "originChannelChart",
      "intermediaryChart",
      "averageTicketChart",
      "topValueZoneChart",
    ],
  },
};
