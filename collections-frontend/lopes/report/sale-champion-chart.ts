import { ServiceFunctionsEnum } from "../../../src/enums/form";
import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../../../src/enums/main";
import { RequestTypeEnum } from "../../../src/enums/request";
import { MainInterface } from "../../../src/interfaces/main";

export const SALE_CHAMPION_CHART: MainInterface = {
  frontendFramework: FrontendFrameworkEnum.Angular,
  // backendFramework: BackendFrameworkEnum.Loopback,
  chart: {
    id: "saleChampionChart",
    bar: {
      datasets: [],
      labels: []
    },
    service: {
      baseUrl: "https://back-data-report.dev.lpsbr.com/api/v1",
      endPoint: "intermediations/sale-champions",
      hasAuthorization: true,
      methods: [
        ServiceFunctionsEnum.Get,
      ],
    },
  }
};