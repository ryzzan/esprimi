import { ServiceFunctionsEnum } from "../../../src/enums/form";
import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../../../src/enums/main";
import { RequestTypeEnum } from "../../../src/enums/request";
import { MainInterface } from "../../../src/interfaces/main";

export const REAL_ESTATE_TYPE_CHART: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  // backendFramework: BackendFrameworkEnum.Loopback,
  chart: {
    id: "realEstateTypeChart",
    bar: {
      datasets: [],
      labels: []
    },
    service: {
      baseUrl: "https://back-data-report.dev.lpsbr.com/api/v1",
      endPoint: "intermediations/real-state-types",
      hasAuthorization: true,
      methods: [
        ServiceFunctionsEnum.Get,
      ],
    },
  }
};