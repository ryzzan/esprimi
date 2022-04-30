import { FrontendFrameworkEnum } from "../../../src/enums/main";
import { MainInterface } from "../../../src/interfaces/main";

export const REALTY_ROOM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'realtyRoom',
        title: 'Cômodos',
        components: ['realtyRoomForm', 'realtyRoomTable'],
    }
}