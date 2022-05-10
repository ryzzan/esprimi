import * as fs from "fs";
import * as chp from "child_process";
import { BuildedCode, MainInterface } from "../../../interfaces/main";
import { TextTransformation } from "../../../utils/text.transformation";
import { AngularArchitectureCode } from "./code";
import { ComponentCodeTypeEnum } from "../../../enums/architecture";

export class AngularArchitectureModule {
  static createArchitectureModule = async (
    moduleCode: BuildedCode | undefined,
    object: MainInterface
  ) => {
    if (!object.module) return false;

    let modulePath = TextTransformation.kebabfy(object.module.id);
    let hasChart: boolean = false;

    const projectPath = object.projectPath;
    const projectAndModulePath = `${projectPath}/src/app/modules/${modulePath}`;

    try {
      fs.readdirSync(projectAndModulePath);

      await AngularArchitectureCode.writeCodeToFile(
        projectPath,
        modulePath,
        moduleCode?.template,
        ComponentCodeTypeEnum.Template,
        object
      );

      await AngularArchitectureCode.writeCodeToFile(
        projectPath,
        modulePath,
        moduleCode?.module,
        ComponentCodeTypeEnum.Module,
        object
      );

      console.info(`Module folder  modules/${modulePath} already exists.`);
    } catch (error: any) {
      console.info(`Module folder  modules/${modulePath} doesn't exist.`);
      chp.execSync(
        `ng g module modules/${modulePath} --routing --routing-scope Child`,
        { cwd: projectPath }
      );

      chp.execSync(
        `ng g c modules/${modulePath} --module modules/${modulePath}`,
        { cwd: projectPath }
      );

      await AngularArchitectureCode.writeCodeToFile(
        projectPath,
        modulePath,
        moduleCode?.template,
        ComponentCodeTypeEnum.Template,
        object
      );

      await AngularArchitectureCode.writeCodeToFile(
        projectPath,
        modulePath,
        moduleCode?.module,
        ComponentCodeTypeEnum.Module,
        object
      );

      await AngularArchitectureModule.createModuleLazyLoad(object);

      await AngularArchitectureModule.setModuleComponentRoute(object);

      object.module.components.map(element => {
        const kebabfyedElement = TextTransformation.kebabfy(element);
        console.log(kebabfyedElement, "757575757575757575757575757575757575757575757575757575757575");
        if (kebabfyedElement.split('-').pop() === "chart") {
          hasChart = true;
        }
      })

      if (hasChart) {
        await AngularArchitectureModule.importNgChartsModule(object);
      }
    }
  };

  static createModuleLazyLoad = async (object: MainInterface) => {
    if (!object.module) return false;

    let modulePath = TextTransformation.kebabfy(object.module.id);

    const projectPath = object.projectPath;
    const projectMainModuleRoutingPath = `${projectPath}/src/app/modules/main/main-routing.module.ts`;

    try {
      const file = fs.readFileSync(projectMainModuleRoutingPath);
      const routeCode =
        file.toString().search(`path: '${modulePath}'`) >= 0
          ? ""
          : `{path: '${modulePath}', loadChildren: () => import('../${modulePath}/${modulePath}.module').then(m => m.${TextTransformation.setIdToClassName(
              object.module.id
            )}Module)}, `;
      const editRouteCode =
        file.toString().search(`path: '${modulePath}'`) >= 0
          ? ""
          : `{path: '${modulePath}/:id', loadChildren: () => import('../${modulePath}/${modulePath}.module').then(m => m.${TextTransformation.setIdToClassName(
              object.module.id
            )}Module)}, `;
      let code = "";

      code = file
        .toString()
        .replace("children: [", `children: [${routeCode} ${editRouteCode}`);

      fs.writeFileSync(projectMainModuleRoutingPath, code);

      return true;
    } catch (error: any) {
      console.error(error);
    }
  };

  static setModuleComponentRoute = async (object: MainInterface) => {
    if (!object.module) return false;

    let modulePath = TextTransformation.kebabfy(object.module.id);

    const projectPath = object.projectPath;
    const moduleRoutingPath = `${projectPath}/src/app/modules/${modulePath}/${modulePath}-routing.module.ts`;

    try {
      const file = fs.readFileSync(moduleRoutingPath);
      const moduleComponentCode =
        file.toString().search(`const routes: Routes = [];`) >= 0
          ? ""
          : `import { ${TextTransformation.setIdToClassName(
              object.module.id
            )}Component } from './${TextTransformation.kebabfy(
              object.module.id
            )}.component'; const routes: Routes = [{ path: '', component: ${TextTransformation.setIdToClassName(
              object.module.id
            )}Component }];`;
      let code = "";

      code = file
        .toString()
        .replace("const routes: Routes = [];", `${moduleComponentCode}`);

      fs.writeFileSync(moduleRoutingPath, code);

      return true;
    } catch (error: any) {
      console.error(error);
    }
  };

  static importNgChartsModule = async (object: MainInterface) => {
    if (!object.module) return false;

    let modulePath = TextTransformation.kebabfy(object.module.id);

    const projectPath = object.projectPath;
    const modulePathToImport = `${projectPath}/src/app/modules/${modulePath}/${modulePath}.module.ts`;

    try {
      const file = fs.readFileSync(modulePathToImport);
      let moduleImportCode = "";
      let moduleImportsCode = "";
      if (file.toString().search(`import { NgChartsModule } from "ng2-charts";`) <= 1) {
        console.info("Intalling ng charts");
        
        chp.execSync(
          `npm install ng2-charts --save`, 
          {cwd: projectPath}
        );

        chp.execSync(
          `npm install chart.js --save`, 
          {cwd: projectPath}
        );

        moduleImportCode = `import { SharedModule } from '../shared/shared.module'; import { NgChartsModule } from "ng2-charts";`;
        moduleImportsCode = `SharedModule, NgChartsModule]`
      }

      let code = "";

      code = file
        .toString()
        .replace("import { SharedModule } from '../shared/shared.module';", `${moduleImportCode}`);

      code = code.replace("SharedModule]", moduleImportsCode);

      fs.writeFileSync(modulePathToImport, code);

      return true;
    } catch (error: any) {
      console.error(error);
    }
  }
}
