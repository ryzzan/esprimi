import {
    BuildedBackendCode,
    MainInterface
} from "../interfaces/main";
import {
    LoopbackArchitecture
} from "./architecture/loopback/main";

export class BackendArchitecture {
    architectureToLoopback;

    constructor() {
        this.architectureToLoopback = new LoopbackArchitecture;
    }

    createArchitecture = async (
        code: BuildedBackendCode | undefined,
        object: MainInterface
    ) => {
        switch (object.backendFramework) {
            case 'LOOPBACK':
                return await this.architectureToLoopback.createArchitecture(code, object)
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
                console.info('None or unknown backend framework chosen.')
                return {
                    model: '',
                    controller: '',
                    repository: '',
                    service: '',
                };

                break;
        }
    }
}