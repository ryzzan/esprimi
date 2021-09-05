import {
    MainInterface
} from "../../../../interfaces/main";
import { 
    TextTransformation
} from "../../../../utils/text.transformation";
import {
    CodeToAngularFormTemplate
} from "./form/main";
import { 
    CodeToAngularTableTemplate
} from "./table/main";

export class CodeToAngularTemplate {
    customTemplateFormCode = new CodeToAngularFormTemplate;
    customTemplateTableCode = new CodeToAngularTableTemplate;

    createTemplateCode = (object: MainInterface): string => {
        const componentSkeletonCode = `
                                <mat-card>
                                    %CONTENT%
                                </mat-card>
                                `;

        let code = componentSkeletonCode;

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