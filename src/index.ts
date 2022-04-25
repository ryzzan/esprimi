import { Architecture } from "./controllers/architecture";
import { FrontendCode } from "./controllers/frontend-code";
import { BackendCode } from "./controllers/backend-code";
import {
  BuildedBackendCode,
  BuildedCode,
  MainInterface,
} from "./interfaces/main";
import { BackendArchitecture } from "./controllers/backend-architecture";

export class Main {
  backendCode = new BackendCode();
  backendArchitecture = new BackendArchitecture();
  frontendCode = new FrontendCode();
  frontentArchitecture = new Architecture();

  createCode = async (array: Array<MainInterface>, index = 0) => {
    if (array[index].frontendFramework) {
      try {
        console.info("Dealing with code. It's gonna be fast!");
        const codes = await this.frontendCode.createCode(array[index]);

        if (array[index].projectPath) {
          console.info("Now the architecture!");
          await this.createFrontendArchitecture(codes, array[index]);
        }

        // console.info("Here are the codes:", codes);
      } catch (error: any) {
        console.error({
          component: "",
          service: "",
          template: "",
          module: "",
        });
      }
    }

    if (array[index].backendFramework) {
      try {
        console.info("Dealing with code. It's gonna be fast!");
        const codes = await this.backendCode.createCode(array[index]);

        if (array[index].projectPath) {
          console.info("Now the architecture!");
          await this.createBackendArchitecture(codes, array[index]);
        }
      } catch (error: any) {
        console.error({
          model: "",
          repository: "",
          controller: "",
        });
      }
    }

    index = index + 1;

    if (index < array.length) {
      this.createCode(array, index);
    }
  };

  createFrontendArchitecture = async (
    codes: BuildedCode | undefined,
    object: MainInterface
  ) => {
    await this.frontentArchitecture.createArchitecture(codes, object);
  };

  createBackendArchitecture = async (
    codes: BuildedBackendCode | undefined,
    object: MainInterface
  ) => {
    await this.backendArchitecture.createArchitecture(codes, object);
  };
}
