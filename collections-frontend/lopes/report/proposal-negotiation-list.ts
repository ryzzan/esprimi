import { ServiceFunctionsEnum } from "../../../src/enums/form";
import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const PROPOSAL_NEGOTIATION_LIST: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  backendFramework: BackendFrameworkEnum.Loopback,
  list: {
    id: "proposalNegotiationList",
    elements: {
      titleField: ["value", "label"],
    },
    service: {
      baseUrl: "https://back-data-report.dev.lpsbr.com/api/v1/",
      endPoint: "proposals/proposal-negotiations?start_date=2022-05-01&finish_date=2022-05-10&company_id=37",
      hasAuthorization: true,
      methods: [
        ServiceFunctionsEnum.Get,
        ServiceFunctionsEnum.Delete,
        ServiceFunctionsEnum.Find,
      ],
    },
  }
};