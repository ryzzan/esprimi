import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const REALTY_ROOM: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'realtyRoom',
        title: 'Parâmetros de avaliação',
        components: ['realtyRoomForm', 'realtyRoomTable'],
    }
}