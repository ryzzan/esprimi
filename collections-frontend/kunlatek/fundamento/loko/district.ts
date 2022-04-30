import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const DISTRICT: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'district',
        title: 'Bairros',
        components: ['districtForm', 'districtTable'],
    }
}