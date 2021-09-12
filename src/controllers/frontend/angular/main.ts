import {
    BuildedCode,
    MainInterface
} from "../../../interfaces/main";
import { CodeToAngularComponent } from "./component/main";
import { CodeToAngularService } from "./service/main";
import { CodeToAngularTemplate } from "./template/main";

export class CodeToAngular {
    component = new CodeToAngularComponent;
    template = new CodeToAngularTemplate;
    service = new CodeToAngularService;
    projectName: any;

    createCode = (object: MainInterface): BuildedCode => {
        this.projectName = this.createProjectName(object);
        
        const component = this.component.createComponentCode(this.projectName, object);
        const template = this.template.createTemplateCode(object);
        const service = this.service.createServiceCode(this.projectName, object);
        
        return {
            component: component.replace(/\n/gi, '').replace(/    /gi, ''),
            template: template.replace(/\n/gi, '').replace(/    /gi, ''),
            service: service.replace(/\n/gi, '').replace(/    /gi, ''),
        }
    }

    private createProjectName = (object: MainInterface) => {
        if (object.form)
            return object.form.id;

        if (object.table)
            return object.table.id;
    }
}