import * as fs from 'fs';

import { MainInterface } from "../../../../interfaces/main";
import { TextTransformation } from '../../../../utils/text.transformation';
import { CodeToAngularNavigationMenu } from "./menu";

export class CodeToAngularNavigation {
    createNavigationCode = async ( 
        object: MainInterface
    ): Promise<string> => {
        const file = fs.readFileSync(`${object.projectPath}/src/app/modules/main/main.component.ts`);
        const navigationCode = CodeToAngularNavigationMenu.customMenu(object);
        
        let code = '';
        code = file.toString().replace(navigationCode, '');
        code = file.toString().replace('menu = [', `menu = [${navigationCode}`);

        code = TextTransformation.replaceKebabfyFunctionToString(code);
        code = TextTransformation.replacePascalfyFunctionToString(code);

        return code;
    }
}