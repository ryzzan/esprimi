import { FormInputTypeEnum } from "../../../../../enums/form";
import { AutocompleteInterface } from "../../../../../interfaces/form";
import { TextTransformation } from "../../../../../utils/text.transformation";

export class CodeToAngularFormTemplateAutocomplete {
    static createAutocomplete = (autocomplete: AutocompleteInterface): string => {
        const placeholder = autocomplete.placeholder ?
            `placeholder="${autocomplete.placeholder}"` :
            '';
        const required = autocomplete.isRequired?'required' : '';
        
        const codeAutocomplete = `<mat-form-field class="autocomplete">
          <mat-label>${autocomplete.label}</mat-label>
          <mat-chip-list #${autocomplete.name}ChipList aria-label="Seleção de ${autocomplete.label.toLowerCase()}">
            <mat-chip
              *ngFor="let ${autocomplete.name}Item of chosen${TextTransformation.pascalfy(autocomplete.name)}"
              (removed)="remove${TextTransformation.pascalfy(autocomplete.name)}(${autocomplete.name}Item)">
              {{${autocomplete.name}Item}}
              <button matChipRemove>
                <mat-icon>cancel</mat-icon>
              </button>
            </mat-chip>
            <input
              placeholder="${placeholder}"
              #${autocomplete.name}Input
              formControlName="${autocomplete.name}"
              [matAutocomplete]="auto${TextTransformation.pascalfy(autocomplete.name)}"
              [matChipInputFor]="${autocomplete.name}ChipList"
              [matChipInputSeparatorKeyCodes]="separatorKeysCodes"
              (matChipInputTokenEnd)="add${TextTransformation.pascalfy(autocomplete.name)}($event)"
              (keyup)="callSetFiltered${TextTransformation.pascalfy(autocomplete.name)}()"
              type="${autocomplete.type}"
              ${required}
            >
          </mat-chip-list>
          <mat-autocomplete #auto${TextTransformation.pascalfy(autocomplete.name)}="matAutocomplete" (optionSelected)="selected${TextTransformation.pascalfy(autocomplete.name)}($event)">
            <mat-option *ngFor="let ${autocomplete.name}Item of filtered${TextTransformation.pascalfy(autocomplete.name)}" [value]="${autocomplete.name}Item">
              {{${autocomplete.name}Item.${autocomplete.optionsApi.labelField}}}
            </mat-option>
          </mat-autocomplete>
        </mat-form-field>`;
        return codeAutocomplete;
    }
}