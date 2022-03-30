import * as fs from "fs";

import { ComponentCodeTypeEnum } from "../../../enums/architecture";
import { MainInterface } from "../../../interfaces/main";

export class LoopbackArchitectureCode {
  static writeCodeToFile = async (
    projectPath: string,
    componentPath: string,
    code: string | undefined,
    codeType: string,
    object: MainInterface
  ) => {
    let componentFilePath = "";
    let componentIndexFilePath = "";
    code ? (code = code) : (code = "");

    if (codeType === ComponentCodeTypeEnum.Model) {
      componentFilePath = `${projectPath}/src/models/${componentPath}.model.ts`;
      componentIndexFilePath = `${projectPath}/src/models/index.ts`;
    }

    if (codeType === ComponentCodeTypeEnum.Repository) {
      componentFilePath = `${projectPath}/src/repositories/${componentPath}.repository.ts`;
      componentIndexFilePath = `${projectPath}/src/repositories/index.ts`;
    }

    if (codeType === ComponentCodeTypeEnum.Controller) {
      componentFilePath = `${projectPath}/src/controllers/${componentPath}.controller.ts`;
      componentIndexFilePath = `${projectPath}/src/controllers/index.ts`;
    }

    try {
      fs.writeFileSync(componentFilePath, code);
      fs.appendFile(componentIndexFilePath, `export * from './${componentPath}.${codeType}';`, () => { });

      console.info(`File ${componentPath} already exists.`);
      console.info(`File successfully written in ${componentFilePath}.`);
    } catch (error) {
      console.info(`File ${componentPath} doesn't exist.`);

      fs.writeFileSync(componentFilePath, code);

      console.info(`File successfully created in ${componentFilePath}.`);
    }
    /** Make code prettier */

    /** Test and validate code */
  };
}
