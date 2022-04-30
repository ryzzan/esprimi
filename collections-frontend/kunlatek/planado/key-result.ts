import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const KEY_RESULT: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'keyResult',
        title: 'Resultados chave',
        components: ['keyResultForm', 'keyResultTable'],
    }
}