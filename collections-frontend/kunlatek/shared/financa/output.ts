import { FrontendFrameworkEnum } from "../../../../src/enums/main";
import { MainInterface } from "../../../../src/interfaces/main";

export const OUTPUT: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'output',
        title: 'Saídas',
        components: ['outputForm', 'outputTable'],
    }
}