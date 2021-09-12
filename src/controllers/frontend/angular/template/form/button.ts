import { FormButtonTypeEnum } from "../../../../../enums/form";
import { ButtonInterface } from "../../../../../interfaces/form";

export class CodeToAngularFormTemplateButton {
    static createButton(button: ButtonInterface): string {
        let color = '';
        const dialogAction = '';
        const label =
            button.type === FormButtonTypeEnum.Submit ?
            `{{isAddModule?'Criar' : 'Editar'}}` :
            button.label;
        let codeButton = '';

        if (button.type === FormButtonTypeEnum.Button) color = '';
        if (button.type === FormButtonTypeEnum.Submit)
            color = `color="primary" ${dialogAction}`;
        if (button.type === FormButtonTypeEnum.Delete)
            color = `color="warn" ${dialogAction}`;
        if (button.type === FormButtonTypeEnum.Reset) color = `color="accent"`;

        if (button.type === FormButtonTypeEnum.Submit)
            codeButton += `<mat-card-actions>`;
        codeButton += `<button mat-raised-button ${color}>${label}</button>`;
        if (button.type === FormButtonTypeEnum.Submit)
            codeButton += `</mat-card-actions>`;

        return codeButton;
    }
}