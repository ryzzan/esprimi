import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const REALTY_BUSINESS_TYPE: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'realtyBusinessType',
        title: 'Tipos de negócios',
        components: ['realtyBusinessTypeForm', 'realtyBusinessTypeTable'],
    }
}