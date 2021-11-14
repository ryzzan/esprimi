import { Architecture } from "./controllers/architecture";
import { FrontendCode } from "./controllers/frontend-code";
import {
    BuildedCode,
    MainInterface
} from "./interfaces/main";

export class Main {
    frontendCode = new FrontendCode;
    architecture = new Architecture;

    createCode = async (
        object: MainInterface
    ): Promise<BuildedCode | undefined> => {
        if (object.frontendFramework) {
            try {
                console.info("Dealing with code. It's gonna be fast!");
                const codes = await this.frontendCode.createCode(object);
                
                if(object.projectPath) 
                    await this.createArchitecture(codes, object);

                console.info("Here are the codes:", codes);
                return codes;
            } catch (error) {
                return {
                    component: '',
                    service: '',
                    template: '',
                    module: '',
                    navigation: '',
                };
            }
        }
    }

    createArchitecture = async (
        codes: BuildedCode | undefined, 
        object: MainInterface
    ) => {
        this.architecture.createArchitecture(codes, object);
    }
}