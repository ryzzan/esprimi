import {
    BuildedCode,
    MainInterface
} from "../interfaces/main";

export class BackendCode {

    constructor() {
    }

    createCode = async (
        object: MainInterface
    ): Promise<BuildedCode | undefined> => {
        switch (object.backendFramework) {
            case 'LOOPBACK':
                // TO-DO
                break;

            case 'NEST':
                // TO-DO
                break;

            case 'GIN':
                // TO-DO
                break;

            case 'DJANGO':
                // TO-DO
                break;

            case 'SPRINGBOOT':
                // TO-DO
                break;

            default:
                console.info('None or unknown frontend framework chosen.')
                return {
                    component: '',
                    service: '',
                    template: '',
                    module: '',
                };

                break;
        }
    }
}