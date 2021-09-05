import { FrontendFrameworkEnum } from "../src/enums/main";
import { MainInterface } from "../src/interfaces/main";

export const EXAMPLE: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    nest: {
        id:'example',
        components: ['example-form', 'example-table'],
    }
}