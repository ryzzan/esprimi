import { ServiceFunctionsEnum } from "../../../src/enums/form";
import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const TOP_VALUE_ZONE_CHART: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  backendFramework: BackendFrameworkEnum.Loopback,
  chart: {
    id: "topValueZoneChart",
    bar: {
      datasets: [],
      labels: []
    },
    service: {
      baseUrl: "https://back-data-report.dev.lpsbr.com/api/v1",
      endPoint: "proposals/top-value-zones",
      hasAuthorization: true,
      methods: [
        ServiceFunctionsEnum.Get,
      ],
    },
  }
};