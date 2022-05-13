import { MainInterface } from "../../../../../interfaces/main";

export class CodeToAngularListTemplate {
  createListSkeleton(object: MainInterface): string {
    if (!object.list) return "";
    let hasListTitleField = "";
    let hasListSubtitleField = "";
    let hasListContentField = "";

    const hasListTitle = object.list.title
      ? `<mat-card-title>${object.list.title}</mat-card-title>`
      : "";

    const hasListSubtitle = object.list.subtitle
      ? `<mat-card-subtitle>${object.list.subtitle}</mat-card-subtitle>`
      : "";

    if (object.list.elements?.titleField) {
      const id = object.list.id;

      hasListTitleField += "<mat-card-title>";
      object.list.elements.titleField
      .map(element => {
        hasListTitleField += `{{${id}Item.${element}}} `
      })
      hasListTitleField += "</mat-card-title>";
    }

    if (object.list.elements?.subtitleField) {
      const id = object.list.id;

      hasListSubtitleField += "<mat-card-subtitle>";
      object.list.elements.subtitleField
      .map(element => {
        hasListSubtitleField += `{{${id}Item.${element}}} `
      })
      hasListSubtitleField += "</mat-card-subtitle>";
    }

    if (object.list.elements?.contentField) {
      const id = object.list.id;

      hasListContentField += `<mat-card-content class="list-container">`;
      object.list.elements.contentField
      .map(element => {
        hasListContentField += `{{${id}Item.${element}}} `
      })
      hasListContentField += "</mat-card-content>";
    }

    const listTemplate = `
    <mat-card>
        <mat-card-header>
            ${hasListTitle}
            ${hasListSubtitle}
        </mat-card-header>

        <mat-card-actions>
            
        </mat-card-actions>

        <mat-card-content class="list-container" *ngFor="let ${object.list.id}Item of ${object.list.id}DataSource.data">

            <mat-card>
                <mat-card-header>
                    ${hasListTitleField}
                    ${hasListSubtitleField}
                </mat-card-header>

                ${hasListContentField}
            </mat-card>

        </mat-card-content>
    </mat-card>
    `;

    return listTemplate;
  }
}
