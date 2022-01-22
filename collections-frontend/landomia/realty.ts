import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const REALTY: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'realty',
        title: 'Parâmetros de avaliação',
        components: ['realtyForm', 'realtyTable'],
    }
}