import {
    MainInterface
} from "../../../../interfaces/main";
import { 
    TextTransformation
} from "../../../../utils/text.transformation";
import { CodeToAngularChartTemplate } from "./chart/main";
import {
    CodeToAngularFormTemplate
} from "./form/main";
import { CodeToAngularListTemplate } from "./list/main";
import { CodeToAngularModuleTemplate } from "./module/main";
import { 
    CodeToAngularTableTemplate
} from "./table/main";

export class CodeToAngularTemplate {
    customTemplateFormCode = new CodeToAngularFormTemplate;
    customTemplateTableCode = new CodeToAngularTableTemplate;
    customTemplateModuleCode = new CodeToAngularModuleTemplate;
    customTemplateChartCode = new CodeToAngularChartTemplate;
    customTemplateListCode = new CodeToAngularListTemplate;

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

        if (object.chart) {
            const templateChartCode = this.customTemplateChartCode.createChartSkeleton(object);
            code = code.replace('%CONTENT%', templateChartCode);
        }

        if (object.list) {
            const templateListCode = this.customTemplateListCode.createListSkeleton(object);
            code = code.replace('%CONTENT%', templateListCode);
        }

        code = TextTransformation.replaceKebabfyFunctionToString(code);
        code = TextTransformation.replacePascalfyFunctionToString(code);
        
        return code;
    }
}