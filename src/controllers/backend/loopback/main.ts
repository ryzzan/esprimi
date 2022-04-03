import {
    BuildedBackendCode,
    MainInterface
} from "../../../interfaces/main"
import { CodeToLoopbackController } from "./controller/main"
import { CodeToLoopbackModel } from "./model/main"
import { CodeToLoopbackRepository } from "./repository/main"

export class CodeToLoopback {
    model = new CodeToLoopbackModel
    repository = new CodeToLoopbackRepository
    controller = new CodeToLoopbackController
    projectName: string

    createCode = async (
        object: MainInterface
    ): Promise<BuildedBackendCode> => {
        this.projectName = this.createProjectName(object)
        let model = ''
        let controller = ''
        let repository = ''
        let service = ''

        model = await this.model.createComponentCode(this.projectName!, object)
        repository = await this.repository.createComponentCode(this.projectName!, object)
        controller = await this.controller.createComponentCode(this.projectName!, object)

        return {
            model: model.replace(/\n/gi, '').replace(/    /gi, ''),
            controller: controller.replace(/\n/gi, '').replace(/    /gi, ''),
            repository: repository.replace(/\n/gi, '').replace(/    /gi, ''),
            service: service.replace(/\n/gi, '').replace(/    /gi, ''),
        }
    }

    private createProjectName = (object: MainInterface) => {
        return object.form!.id.replace("Form", '')!;
    }
}