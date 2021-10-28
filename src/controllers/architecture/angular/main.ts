import { BuildedCode, MainInterface } from "../../../interfaces/main";
import { AngularArchitectureService } from "./service";
import { AngularArchitectureComponent } from "./component";
import { AngularArchitectureProject } from "./project"
import { AngularArchitectureTemplate } from "./template";

export class AngularArchitecture {
    createArchitecture = (
        code: BuildedCode | undefined,
        object: MainInterface
    ) => {
        const projectPath = object.projectPath;
        
        console.info("First of all we are going to clone a quickstart structure to our project and run its depedencies if the project doesn't exist.");
        AngularArchitectureProject.createArchitectureProject(
            projectPath
        );

        console.info("Now we are going to use Angular CLI to create the components and write in it the code we've created.");
        AngularArchitectureComponent.createArchitectureComponent(code?.component, object);

        console.info("Now we are going to use write the template in component the code we've created.");
        AngularArchitectureTemplate.createArchitectureTemplate(code?.template, object);

        console.info("Like we did with components and templates, now we are going to do the same with services.");
        AngularArchitectureService.createArchitectureService(code?.service, object);
    }
}