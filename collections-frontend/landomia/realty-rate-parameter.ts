import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const REALTY_RATE_PARAMETER: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'realtyRateParameter',
        title: 'Parâmetros de avaliação',
        components: ['realtyRateParameterForm', 'realtyRateParameterTable'],
    }
}