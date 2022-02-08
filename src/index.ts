import { Architecture } from "./controllers/architecture";
import { FrontendCode } from "./controllers/frontend-code";
import { BackendCode } from "./controllers/backend-code";
import {
    BuildedCode,
    MainInterface
} from "./interfaces/main";

export class Main {
    backendCode = new BackendCode;
    frontendCode = new FrontendCode;
    architecture = new Architecture;

    createCode = async (
        array: Array<MainInterface>,
        index = 0
    ) => {
        if (array[index].frontendFramework) {
            try {
                console.info("Dealing with code. It's gonna be fast!");
                const codes = await this.frontendCode.createCode(array[index]);
                
                if(array[index].projectPath) {
                    console.info("Now the architecture!"); 
                    await this.createArchitecture(codes, array[index]);
                }

                // console.info("Here are the codes:", codes);
            } catch (error) {
                console.error({
                    component: '',
                    service: '',
                    template: '',
                    module: '',
                });
            }

            index = index + 1;

            if (index < array.length) {
                this.createCode(array, index);
            }
        }
    }

    createArchitecture = async (
        codes: BuildedCode | undefined, 
        object: MainInterface
    ) => {
        await this.architecture.createArchitecture(codes, object);
    }
}