import { FrontendCode } from "./controllers/frontend-code";
import {
    BuildedCode,
    MainInterface
} from "./interfaces/main";

export class Main {
    frontendCode = new FrontendCode;
    createCode = (object: MainInterface, projectPath?: string): BuildedCode | undefined => {
        if (object.frontendFramework) {
            try {
                const code = this.frontendCode.createCode(object);
                
                // if (projectPath) {
                //     this.createArchitecture(code, object, projectPath);
                // }

                return code;
            } catch (error) {
                return error;
            }
        }
    }

    setArchitecture = (code: BuildedCode, object: MainInterface, projectPath: string) => {
        object['projectPath'] = projectPath;
    }
}