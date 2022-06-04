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
import { AVERAGE_TICKET_LEASE_CHART } from "../collections-frontend/lopes/report/average-ticket-lease-chart";

const main = new Main(),
  array = [
    /**
     * LOPES REPORT
     */
    AVERAGE_TICKET_LEASE_CHART
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
