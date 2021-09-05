import {
    BuildedCode,
    MainInterface
} from "../../../interfaces/main";
import { CodeToAngularComponent } from "./component/main";
import { CodeToAngularTemplate } from "./template/main";

export class CodeToAngular {
    component = new CodeToAngularComponent;
    template = new CodeToAngularTemplate;
    projectName: any;

    createCode = (object: MainInterface): BuildedCode => {
        this.projectName = this.createProjectName(object);
        
        const component = this.component.createComponentCode(this.projectName, object);
        const template = this.template.createTemplateCode(object);
        
        return {
            component: component.replace(/\n/gi, '').replace(/    /gi, ''),
            service: '',
            template: template.replace(/\n/gi, '').replace(/    /gi, ''),
        }
    }

    private createProjectName = (object: MainInterface) => {
        if (object.form)
            return object.form.id;

        if (object.table)
            return object.table.id;
    }
}