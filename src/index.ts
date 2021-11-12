import { Architecture } from "./controllers/architecture";
import { FrontendCode } from "./controllers/frontend-code";
import {
    BuildedCode,
    MainInterface
} from "./interfaces/main";

export class Main {
    frontendCode = new FrontendCode;
    architecture = new Architecture;

    createCode = (
        object: MainInterface
    ): BuildedCode | undefined => {
        if (object.frontendFramework) {
            try {
                console.info("Dealing with code. It's gonna be fast!");
                const codes = this.frontendCode.createCode(object);
                
                if(object.projectPath) this.createArchitecture(codes, object);

                console.info("Here are the codes:", codes);
                return codes;
            } catch (error) {
                return {
                    component: '',
                    service: '',
                    template: '',
                    module: '',
                };
            }
        }
    }

    createArchitecture = (
        codes: BuildedCode | undefined, 
        object: MainInterface
    ) => {
        this.architecture.createArchitecture(codes, object);
    }
}