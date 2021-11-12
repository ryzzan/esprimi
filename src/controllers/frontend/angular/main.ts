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
    module = new CodeToAngularModule;
    projectName: any;

    createCode = (object: MainInterface): BuildedCode => {
        this.projectName = this.createProjectName(object);
        
        const component = !object.module ? this.component.createComponentCode(this.projectName, object) :  '';
        const template = this.template.createTemplateCode(object);
        const service = !object.module ? this.service.createServiceCode(this.projectName, object) : '';
        const module = object.module ? this.module.createModuleCode(this.projectName, object) : '';
        
        return {
            component: component.replace(/\n/gi, '').replace(/    /gi, ''),
            template: template.replace(/\n/gi, '').replace(/    /gi, ''),
            service: service.replace(/\n/gi, '').replace(/    /gi, ''),
            module: module.replace(/\n/gi, '').replace(/    /gi, ''),
        }
    }

    private createProjectName = (object: MainInterface) => {
        if (object.module)
            return object.module.id;

        if (object.form)
            return object.form.id;

        if (object.table)
            return object.table.id;
    }
}