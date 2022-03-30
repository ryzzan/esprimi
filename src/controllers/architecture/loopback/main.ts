import { BuildedBackendCode, MainInterface } from "../../../interfaces/main";
import { LoopbackArchitectureController } from "./controller";
import { LoopbackArchitectureModel } from "./model";
import { LoopbackArchitectureProject } from "./project"
import { LoopbackArchitectureRepository } from "./repository";

export class LoopbackArchitecture {
    createArchitecture = async (
        code: BuildedBackendCode | undefined,
        object: MainInterface
    ) => {
        console.info("First of all we are going to clone a quickstart structure to our project and run its depedencies if the project doesn't exist.");
        await LoopbackArchitectureProject.createArchitectureProject(object);

        console.info("Now we are going to create the model and write in it the code we've created.");
        await LoopbackArchitectureModel.createArchitectureModel(code?.model, object);

        console.info("Now we are going to create the repository and write in it the code we've created.");
        await LoopbackArchitectureRepository.createArchitectureRepository(code?.repository, object);

        console.info("Now we are going to create the controller and write in it the code we've created.");
        await LoopbackArchitectureController.createArchitectureController(code?.controller, object);
    }
}