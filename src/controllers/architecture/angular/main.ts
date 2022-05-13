import { BuildedCode, MainInterface } from "../../../interfaces/main";
import { AngularArchitectureService } from "./service";
import { AngularArchitectureComponent } from "./component";
import { AngularArchitectureProject } from "./project";
import { AngularArchitectureTemplate } from "./template";
import { AngularArchitectureModule } from "./module";

export class AngularArchitecture {
  createArchitecture = async (
    code: BuildedCode | undefined,
    object: MainInterface
  ) => {
    console.info(
      "First of all we are going to clone a quickstart structure to our project and run its depedencies if the project doesn't exist."
    );
    await AngularArchitectureProject.createArchitectureProject(object);

    if (!object.module) {
      console.info(
        "Now we are going to use Angular CLI to create the components and write in it the code we've created."
      );
      await AngularArchitectureComponent.createArchitectureComponent(
        code?.component,
        object
      );

      console.info(
        "Now we are going to use write the template in component the code we've created."
      );
      await AngularArchitectureTemplate.createArchitectureTemplate(
        code?.template,
        object
      );

      console.info(
        "Like we did with components and templates, now we are going to do the same with services."
      );
      await AngularArchitectureService.createArchitectureService(
        code?.service,
        object
      );
    }

    if (object.module) {
      console.info("Are we nesting some components? Let's do it in a module!");
      await AngularArchitectureModule.createArchitectureModule(code, object);
    }
  };
}
