import * as fs from 'fs';

import { MainInterface } from "../../../../interfaces/main";
import { TextTransformation } from '../../../../utils/text.transformation';
import { CodeToAngularNavigationMenu } from "./menu";

export class CodeToAngularNavigation {
    createNavigationCode = async ( 
        object: MainInterface
    ): Promise<string> => {
        const file = fs.readFileSync(`${object.projectPath}/src/app/modules/main/main.component.ts`);
        const navigationCode = (file.toString().search(`title: '${object.module?.title}'`) >= 0) ? '' : CodeToAngularNavigationMenu.customMenu(object);
        
        let code = '';
        code = file.toString().replace('];', `${navigationCode}];`);

        code = TextTransformation.replaceKebabfyFunctionToString(code);
        code = TextTransformation.replacePascalfyFunctionToString(code);

        return code;
    }
}