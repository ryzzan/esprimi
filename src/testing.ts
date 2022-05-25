import { Main } from "./index";

/**
 * LOPES API
 */
const envFrontDev = `
export const environment = {
    baseUrl: 'https://devapilogin.lpsbr.com/api/v1',
    clientId: '3bb9f7e7-a96f-4657-8039-4755de62a233',
    clientSecret: 'b80a0043-c89d-4571-bb96-515e27a4808f',
    production: false
};`;

const envFrontProd = `
export const environment = {
    baseUrl: '????',
    clientId: '3bb9f7e7-a96f-4657-8039-4755de62a233',
    clientSecret: 'b80a0043-c89d-4571-bb96-515e27a4808f',
    production: true
};`;

const cloneFrontendPath = "https://github.com/ryzzan/lopes-quickstart";

const projectPath = "/home/ryzzan/Projects/lopes-report";

/**
 * LOPES REPORT
 */
import { STORE_GENERAL_VALUE_CHART } from "../collections-frontend/lopes/report/store-general-value-chart";
import { PARTNERSHIP_CHART } from "../collections-frontend/lopes/report/partnershipt-chart";
import { AVERAGE_TICKET_INTERMEDIATION_CHART } from "../collections-frontend/lopes/report/average-ticket-intermediation-chart";
import { TOP_VALUE_ZONE_INTERMEDIATION_CHART } from "../collections-frontend/lopes/report/top-value-zone-intermediation-chart";
import { REAL_ESTATE_TYPE_CHART } from "../collections-frontend/lopes/report/real-estate-type-chart";
import { SALE_CHAMPION_CHART } from "../collections-frontend/lopes/report/sale-champion-chart";
import { INTERMEDIATION } from "../collections-frontend/lopes/report/intermediation";

const main = new Main(),
  array = [
    /**
     * LOPES REPORT
     */
    STORE_GENERAL_VALUE_CHART,
    PARTNERSHIP_CHART,
    AVERAGE_TICKET_INTERMEDIATION_CHART,
    TOP_VALUE_ZONE_INTERMEDIATION_CHART,
    REAL_ESTATE_TYPE_CHART,
    SALE_CHAMPION_CHART,
    INTERMEDIATION,
  ];

array.forEach((object) => {
  object.projectPath = projectPath;
  object.cloneFrontendPath = cloneFrontendPath;
  object.envFrontendDev = envFrontDev;
  object.envFrontendProd = envFrontProd;
});

main
  .createCode(array)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });
