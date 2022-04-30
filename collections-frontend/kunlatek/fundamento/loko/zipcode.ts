import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const ZIPCODE: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'zipcode',
        title: 'Códigos postais',
        components: ['zipcodeForm', 'zipcodeTable'],
    }
}