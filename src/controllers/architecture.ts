import {
    BuildedCode,
    MainInterface
} from "../interfaces/main";
import {
    AngularArchitecture
} from "./architecture/angular/main";

export class Architecture {
    architectureToAngular;

    constructor() {
        this.architectureToAngular = new AngularArchitecture;
    }

    createArchitecture = (
        code: BuildedCode | undefined,
        object: MainInterface
    ) => {
        switch (object.frontendFramework) {
            case 'ANGULAR':
                return this.architectureToAngular.createArchitecture(code, object);
                break;

            case 'REACT':
                // TO-DO
                break;

            case 'SVELTE':
                // TO-DO
                break;

            case 'VUE':
                // TO-DO
                break;

            case 'FLUTTER':
                // TO-DO
                break;

            default:
                console.info('None or unknown frontend framework chosen.')
                return {
                    component: '',
                    service: '',
                    template: ''
                };

                break;
        }
    }
}