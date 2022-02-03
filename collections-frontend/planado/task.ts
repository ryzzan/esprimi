import { FrontendFrameworkEnum } from "../../src/enums/main";
import { MainInterface } from "../../src/interfaces/main";

export const TASK: MainInterface = {
    frontendFramework: FrontendFrameworkEnum.Angular,
    module: {
        id:'task',
        title: 'Tarefas',
        components: ['taskForm', 'taskTable'],
    }
}