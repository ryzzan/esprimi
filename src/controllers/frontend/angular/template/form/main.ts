import {
    FormButtonTypeEnum
} from "../../../../../enums/form";
import {
    FormElementInterface,
    FormInterface,
} from "../../../../../interfaces/form";
import {
    MainInterface
} from "../../../../../interfaces/main";
import {
    TextTransformation
} from "../../../../../utils/text.transformation";
import { CodeToAngularFormTemplateButton } from "./button";
import { CodeToAngularFormTemplateCheckbox } from "./checkbox";

import { CodeToAngularFormTemplateInput } from "./input";
import { CodeToAngularFormTemplateRadio } from "./radio";
import { CodeToAngularFormTemplateSelect } from "./select";

export class CodeToAngularFormTemplate {
    createFormSkeleton(object: MainInterface): string {
        if (!object.form) return '';

        const hasFormTitle = (object.form.title) ?
            `<mat-card-title>${object.form.title}</mat-card-title>` :
            '';

        const hasFormSubtitle = (object.form.subtitle) ?
            `<mat-card-subtitle>${object.form.subtitle}</mat-card-subtitle>` :
            '';

        const formTemplate = `
                            <mat-card>
                                <mat-card-header>
                                    ${hasFormTitle}
                                    ${hasFormSubtitle}
                                </mat-card-header>

                                <mat-card-content>
                                    <form id="${object.form.id}" [formGroup]="${object.form.id}Form" (ngSubmit)="${object.form.id}Submit()">
                                        ${this.createFormInputs(object.form)}
                                    </form>
                                </mat-card-content>
                            </mat-card>
                            `;

        return formTemplate;
    }

    private createFormInputs = (form: FormInterface): string => {
        let formInputs = '';

        if (form.elements)
            formInputs += this.createElements(form.elements);

        if (form.actions)
            formInputs += this.createElements(form.actions);
            
        return formInputs;
    }

    private createElements = (elements: Array<FormElementInterface>) => {
        let code = '';

        elements.forEach((element: FormElementInterface) => {
            if (element.input) code += CodeToAngularFormTemplateInput.createInput(element.input);
            if (element.select) code += CodeToAngularFormTemplateSelect.createSelect(element.select);
            if (element.checkbox) code += CodeToAngularFormTemplateCheckbox.createCheckbox(element.checkbox);
            if (element.radio) code += CodeToAngularFormTemplateRadio.createRadio(element.radio);
            if (element.tabs) code += this.createTab(element.tabs);
            if (element.array) code += this.createArray(element.array);
            if (element.button) code += CodeToAngularFormTemplateButton.createButton(element.button);
        });

        return code;
    }

    private createArray(array: FormInterface): string {
        const arrayClassName = TextTransformation.pascalfy(array.id);
        const add = `add${arrayClassName}`;
        const remove = `remove${arrayClassName}`;

        const codeArray = `<div>
                            <ng-container formArrayName="${array.id}">
                              <mat-list *ngFor="let _${array.id} of ${array.id}.controls; index as i">
                                  <ng-container [formGroupName]="i">
                                      <mat-list-item>
                                          ${array.title} {{1 + i}}
                                      </mat-list-item>
                                      <div>
                                          ${this.createFormInputs(array)}
                                      </div>
                                      <div>
                                          <button mat-button type="button" color="warn" (click)="${remove}(i)">
                                              Remover ${array.title.toLowerCase()}
                                          </button>
                                      </div>
                                  </ng-container>
                                  <mat-divider></mat-divider>
                              </mat-list>
                            </ng-container>
                          </div>
                          <div style="margin: 10px 0;">
                              <button mat-raised-button type="button" (click)=${add}()>
                                  Adicionar ${array.title.toLowerCase()}
                              </button>
                              <mat-divider></mat-divider>
                          </div>`;
        return codeArray;
    }

    private createTab(tabs: Array < FormInterface > ): string {
        let codeTab = `<mat-tab-group>`;
        tabs.forEach((tab: FormInterface) => {
            codeTab += `<mat-tab label="${tab.title}" id="${tab.id}">
                ${this.createFormInputs(tab)}
            </mat-tab>`;
        });
        codeTab += `</mat-tab-group>`;

        return codeTab;
    }
}