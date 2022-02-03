import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const AVAILABILITY: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'availability',
        title: 'Disponibilidade',
        components: ['availabilityForm', 'availabilityTable'],
    }
}