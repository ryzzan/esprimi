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
                            <mat-card>
                                <mat-card-header>
                                    ${hasTableTitle}
                                    ${hasTableSubtitle}
                                </mat-card-header>

                                <mat-card-actions>
                                    <form id="${object.table.id}" [formGroup]="${object.table.id}SearchForm" (ngSubmit)="${object.table.id}Search()">
                                        <mat-form-field appearance="standard">
                                            <mat-label>Filtro</mat-label>
                                            <input matInput formControlName="searchInput" placeholder="Procure qualquer coisa">
                                        </mat-form-field>
                                        <button mat-raised-button color="primary">
                                            <mat-icon>search</mat-icon> Filtrar
                                        </button>
                                    </form>
                                </mat-card-actions>

                                <mat-card-content class="table-container">
                                    <table mat-table [dataSource]="${object.table.id}DataSource" class="mat-elevation-z8">
                                    ${CodeToAngularTableTemplateColumnsAndRows.createColumnsAndRows(object)}                                    
                                        <tr mat-header-row *matHeaderRowDef="${object.table.id}DisplayedColumns"></tr>
                                        <tr mat-row *matRowDef="let row; columns: ${object.table.id}DisplayedColumns;"></tr>                                        
                                    </table>
                                    <div *ngIf="isLoading" class="loading">
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