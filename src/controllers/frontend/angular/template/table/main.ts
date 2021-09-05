import { MainInterface } from "../../../../../interfaces/main";
import { CodeToAngularTableTemplateColumnsAndRows } from "./columns-and-rows";

export class CodeToAngularTableTemplate extends CodeToAngularTableTemplateColumnsAndRows {
    createTableSkeleton(object: MainInterface): string {
        if (!object.table) return '';
        
        const hasTableTitle = (object.table.title) ?
            `<mat-card-title>${object.table.title}</mat-card-title>` :
            '';

        const hasTableSubtitle = (object.table.title) ?
            `<mat-card-subtitle>${object.table.subtitle}</mat-card-subtitle>` :
            '';

        const formTemplate = `
                            <mat-card-header>
                                ${hasTableTitle}
                                ${hasTableSubtitle}
                            </mat-card-header>

                            <mat-card-content>
                                <table mat-table [dataSource]="${object.table.id}DataSource" class="mat-elevation-z8">
                                <div *ngIf="isLoading" style="display: flex; justify-content: center; align-items: center; background: white;">
                                    <tr mat-header-row *matHeaderRowDef="${object.table.id}DisplayedColumns"></tr>
                                    <tr mat-row *matRowDef="let row; columns: ${object.table.id}DisplayedColumns;"></tr>
                                    <mat-progress-spinner color="primary" mode="indeterminate">
                                    </mat-progress-spinner>
                                </div>
                                </table>
                            </mat-card-content>
                            `;

        return formTemplate;
    }
}