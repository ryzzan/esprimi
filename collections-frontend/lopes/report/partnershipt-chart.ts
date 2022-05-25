import { ServiceFunctionsEnum } from "../../../src/enums/form";
import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const PARTNERSHIP_CHART: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  // backendFramework: BackendFrameworkEnum.Loopback,
  chart: {
    id: "partnershipChart",
    pie: {
      datasets: [],
      labels: []
    },
    service: {
      baseUrl: "https://back-data-report.dev.lpsbr.com/api/v1",
      endPoint: "intermediations/partnerships",
      hasAuthorization: true,
      methods: [
        ServiceFunctionsEnum.Get,
      ],
    },
  }
};