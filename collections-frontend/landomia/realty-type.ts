import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const REALTY_TYPE: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'realtyType',
        title: 'Parâmetros de avaliação',
        components: ['realtyTypeForm', 'realtyTypeTable'],
    }
}