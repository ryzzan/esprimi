import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const PRODUCT: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'product',
        title: 'Produtos',
        components: ['productForm', 'productTable'],
    }
}