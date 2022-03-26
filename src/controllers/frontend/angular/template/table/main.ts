import { MainInterface } from "../../../../../interfaces/main";
import { CodeToAngularTableTemplateColumnsAndRows } from "./columns-and-rows";
import { CodeToAngularTableTemplateRowMenu } from "./row-menu";

export class CodeToAngularTableTemplate {
    createTableSkeleton(object: MainInterface): string {
        if (!object.table) return '';
        
        const hasTableTitle = (object.table.title) ?
            `<mat-card-title>${object.table.title}</mat-card-title>` :
            '';

        const hasTableSubtitle = (object.table.subtitle) ?
            `<mat-card-subtitle>${object.table.subtitle}</mat-card-subtitle>` :
            '';

        const tableTemplate = `
                            <div class="loading" *ngIf="isLoading">
                                <div class="centralized">
                                    <mat-spinner></mat-spinner>
                                </div>
                            </div>
                            <mat-card>
                                <mat-card-header>
                                    ${hasTableTitle}
                                    ${hasTableSubtitle}
                                </mat-card-header>

                                <mat-card-content>
                                    <table mat-table [dataSource]="${object.table.id}DataSource" class="mat-elevation-z8">
                                    ${CodeToAngularTableTemplateColumnsAndRows.createColumnsAndRows(object)}                                    
                                        <tr mat-header-row *matHeaderRowDef="${object.table.id}DisplayedColumns"></tr>
                                        <tr mat-row *matRowDef="let row; columns: ${object.table.id}DisplayedColumns;"></tr>                                        
                                    </table>
                                    <div *ngIf="isLoading" style="display: flex; justify-content: center; align-items: center; background: white;">
                                        <mat-progress-spinner color="primary" mode="indeterminate">
                                        </mat-progress-spinner>
                                    </div>
                                </mat-card-content>
                            </mat-card>
                            ${CodeToAngularTableTemplateRowMenu.createRowMenu(object)}
                            `;

        return tableTemplate;
    }
}