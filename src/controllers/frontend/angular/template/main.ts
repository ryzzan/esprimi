import {
    MainInterface
} from "../../../../interfaces/main";
import { 
    TextTransformation
} from "../../../../utils/text.transformation";
import {
    CodeToAngularFormTemplate
} from "./form/main";
import { CodeToAngularModuleTemplate } from "./module/main";
import { 
    CodeToAngularTableTemplate
} from "./table/main";

export class CodeToAngularTemplate {
    customTemplateFormCode = new CodeToAngularFormTemplate;
    customTemplateTableCode = new CodeToAngularTableTemplate;
    customTemplateModuleCode = new CodeToAngularModuleTemplate;

    createTemplateCode = async (
        object: MainInterface
    ): Promise<string> => {
        const componentSkeletonCode = `%CONTENT%`;

        let code = componentSkeletonCode;

        if (object.module) {
            const templateModuleCode = this.customTemplateModuleCode.createModuleSkeleton(object);
            code = code.replace('%CONTENT%', templateModuleCode);
        }

        if (object.form) {
            const templateFormCode = this.customTemplateFormCode.createFormSkeleton(object);
            code = code.replace('%CONTENT%', templateFormCode);
        }

        if (object.table) {
            const templateTableCode = this.customTemplateTableCode.createTableSkeleton(object);
            code = code.replace('%CONTENT%', templateTableCode);
        }

        code = TextTransformation.replaceKebabfyFunctionToString(code);
        code = TextTransformation.replacePascalfyFunctionToString(code);
        
        return code;
    }
}