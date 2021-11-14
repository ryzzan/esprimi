import {
    BuildedCode,
    MainInterface
} from "../../../interfaces/main";
import { CodeToAngularComponent } from "./component/main";
import { CodeToAngularModule } from "./module/main";
import { CodeToAngularNavigation } from "./navigation/main";
import { CodeToAngularService } from "./service/main";
import { CodeToAngularTemplate } from "./template/main";

export class CodeToAngular {
    component = new CodeToAngularComponent;
    template = new CodeToAngularTemplate;
    service = new CodeToAngularService;
    module = new CodeToAngularModule;
    navigation = new CodeToAngularNavigation;
    projectName: any;

    createCode = async (
        object: MainInterface
    ): Promise<BuildedCode> => {
        this.projectName = this.createProjectName(object);
        let component = '';
        let template = '';
        let service = '';
        let module = '';
        let navigation = '';

        if (!object.module) {
            component = await this.component.createComponentCode(this.projectName, object);
            service = await this.service.createServiceCode(this.projectName, object);
        }

        if (object.module) {            
            module = await this.module.createModuleCode(this.projectName, object);
            // navigation = await this.navigation.createNavigationCode(object);
        }

        template = await this.template.createTemplateCode(object);
        
        return await {
            component: component.replace(/\n/gi, '').replace(/    /gi, ''),
            template: template.replace(/\n/gi, '').replace(/    /gi, ''),
            service: service.replace(/\n/gi, '').replace(/    /gi, ''),
            module: module.replace(/\n/gi, '').replace(/    /gi, ''),
            navigation: navigation.replace(/\n/gi, '').replace(/    /gi, ''),
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