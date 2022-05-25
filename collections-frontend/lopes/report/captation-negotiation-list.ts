import { ServiceFunctionsEnum } from "../../../src/enums/form";
import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const CAPTATION_NEGOTIATION_LIST: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  backendFramework: BackendFrameworkEnum.Loopback,
  list: {
    id: "captationNegotiationList",
    elements: {
      titleField: ["value", "label"],
    },
    service: {
      baseUrl: "https://back-data-report.dev.lpsbr.com/api/v1",
      endPoint: "captations/captation-negotiations",
      hasAuthorization: true,
      methods: [
        ServiceFunctionsEnum.Get,
      ],
    },
  }
};