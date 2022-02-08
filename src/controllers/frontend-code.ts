import {
    BuildedCode,
    MainInterface
} from "../interfaces/main";
import {
    CodeToAngular
} from "./frontend/angular/main";

export class FrontendCode {
    codeToAngular;

    constructor() {
        this.codeToAngular = new CodeToAngular;
    }

    createCode = async (
        object: MainInterface
    ): Promise<BuildedCode | undefined> => {
        switch (object.frontendFramework) {
            case 'ANGULAR':
                return await this.codeToAngular.createCode(object);
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
                    template: '',
                    module: '',
                };

                break;
        }
    }
}