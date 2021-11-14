import { MainInterface } from "../../../../interfaces/main";

export class CodeToAngularNavigationMenu {
    static customMenu = (object: MainInterface): string => {        
        if (object.module) {
            const menuCode = `{
                                    router: '/main/%kebabfy${object.module.id}%',
                                    title: '${object.module.title}',
                                    icon: 'dashboard',
                                    itens: [],
                                }, `;

            return menuCode;
        }

        return '';
    }
}