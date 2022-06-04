import { MainInterface } from "../../../../interfaces/main";
import { TextTransformation } from "../../../../utils/text.transformation";
import { CodeToAngularChartComponent } from "./chart/main";
import { CodeToAngularFormComponent } from "./form/main";
import { CodeToAngularListComponent } from "./list/main";
import { CodeToAngularTableComponent } from "./table/main";

export class CodeToAngularComponent {
  customComponentFormCode = new CodeToAngularFormComponent();
  customComponentTableCode = new CodeToAngularTableComponent();
  customComponentChartCode = new CodeToAngularChartComponent();
  customComponentListCode = new CodeToAngularListComponent();

  createComponentCode = async (
    projectName: string,
    object: MainInterface
  ): Promise<string> => {
    const componentSkeletonCode = `
    import { Component, ElementRef, ViewChild, Input, ${object.chart ? `OnChanges, ` : ""}} from "@angular/core";
    %IMPORTS%

    %INTERFACES%

    @Component({
        selector: "app-${TextTransformation.kebabfy(projectName)}",
        templateUrl: "./${TextTransformation.kebabfy(projectName)}.component.html",
        styleUrls: ["./${TextTransformation.kebabfy(projectName)}.component.scss"]
    })
    export class ${TextTransformation.pascalfy(projectName)}Component ${object.chart ? `implements OnChanges` : ""} {
        %PROPERTIES%

        constructor(%DEPENDENCIES%) {
            %CONSTRUCTOR%
        }
        ${object.chart ? `
        ngOnChanges(): void {
          if (this.chartInput && this.chartInput.time !== "3") {
            this.mainFilter = \`\${
              this.chartInput.time
            }&companies=\${
              ((this.chartInput?.companies 
                && this.chartInput?.companies?.length < 1
              ) === null) 
              ? JSON.parse(
                JSON.parse(JSON.stringify(sessionStorage.getItem('companies')))
                ).map((item: any) => { return item.id; }).join()
              : this.chartInput.companies.join()
            }\`;
            this.set${TextTransformation.pascalfy(projectName)}Service(this.mainFilter);
          }
      
          if (this.chartInput?.time === "3") {
            this.mainFilter = \`start_date=\${
              this.chartInput.startDate
            }&finish_date=\${
              this.chartInput.finishDate
            }&companies=\${
              ((this.chartInput?.companies 
                && this.chartInput?.companies?.length < 1
              ) === null) 
              ? JSON.parse(JSON.parse(
                JSON.stringify(sessionStorage.getItem('companies')))
                ).map((item: any) => { return item.id; }).join()
              : this.chartInput.companies.join()
            }\`;
            this.set${TextTransformation.pascalfy(projectName)}Service(this.mainFilter)
          }
        }
        ` : ""}

        %METHODS%

        sendErrorMessage = (errorMessage: string) => {
            this._snackbar.open(errorMessage, undefined, {
                duration: 4 * 1000,
            });
        }
    }
    `;

    let code = componentSkeletonCode;

    if (object.form) {
      const componentImportCode = this.customComponentFormCode.createImport(
        object
      );
      code = code.replace("%IMPORTS%", componentImportCode);

      const componentPropertyCode = this.customComponentFormCode.createProperty(
        object
      );
      code = code.replace("%PROPERTIES%", componentPropertyCode);

      const componentConstructorArgCode = this.customComponentFormCode.createConstructorArg(
        object
      );
      code = code.replace("%CONSTRUCTOR%", componentConstructorArgCode);

      const componentConstructorParamCode = this.customComponentFormCode.createConstructorParams(
        object
      );
      code = code.replace("%DEPENDENCIES%", componentConstructorParamCode);

      const componentActionCode = this.customComponentFormCode.createMethod(
        object
      );
      code = code.replace("%METHODS%", componentActionCode);

      const componentInterfaceCode = this.customComponentFormCode.createInterface(
        object
      );
      code = code.replace("%INTERFACES%", componentInterfaceCode);
    }

    if (object.table) {
      const componentImportCode = this.customComponentTableCode.createImport(
        object
      );
      code = code.replace("%IMPORTS%", componentImportCode);

      const componentPropertyCode = this.customComponentTableCode.createProperty(
        object
      );
      code = code.replace("%PROPERTIES%", componentPropertyCode);

      const componentConstructorArgCode = this.customComponentTableCode.createConstructorArg(
        object
      );
      code = code.replace("%CONSTRUCTOR%", componentConstructorArgCode);

      const componentConstructorParamCode = this.customComponentTableCode.createConstructorParams(
        object
      );
      code = code.replace("%DEPENDENCIES%", componentConstructorParamCode);

      const componentActionCode = this.customComponentTableCode.createMethod(
        object
      );
      code = code.replace("%METHODS%", componentActionCode);

      const componentInterfaceCode = this.customComponentTableCode.createInterface(
        object
      );
      code = code.replace("%INTERFACES%", componentInterfaceCode);
    }

    if (object.chart) {
      const componentImportCode = this.customComponentChartCode.createImport(
        object
      );
      code = code.replace("%IMPORTS%", componentImportCode);

      const componentPropertyCode = this.customComponentChartCode.createProperty(
        object
      );
      code = code.replace("%PROPERTIES%", componentPropertyCode);

      const componentConstructorArgCode = this.customComponentChartCode.createConstructorArg(
        object
      );
      code = code.replace("%CONSTRUCTOR%", componentConstructorArgCode);

      const componentConstructorParamCode = this.customComponentChartCode.createConstructorParams(
        object
      );
      code = code.replace("%DEPENDENCIES%", componentConstructorParamCode);

      const componentActionCode = this.customComponentChartCode.createMethod(
        object
      );
      code = code.replace("%METHODS%", componentActionCode);

      code = code.replace("%INTERFACES%", "");
    }

    if (object.list) {
      const componentImportCode = this.customComponentListCode.createImport(
        object
      );
      code = code.replace("%IMPORTS%", componentImportCode);

      const componentPropertyCode = this.customComponentListCode.createProperty(
        object
      );
      code = code.replace("%PROPERTIES%", componentPropertyCode);

      const componentConstructorArgCode = this.customComponentListCode.createConstructorArg(
        object
      );
      code = code.replace("%CONSTRUCTOR%", componentConstructorArgCode);

      const componentConstructorParamCode = this.customComponentListCode.createConstructorParams(
        object
      );
      code = code.replace("%DEPENDENCIES%", componentConstructorParamCode);

      const componentActionCode = this.customComponentListCode.createMethod(
        object
      );
      code = code.replace("%METHODS%", componentActionCode);

      code = code.replace("%INTERFACES%", "");
    }

    code = TextTransformation.replaceKebabfyFunctionToString(code);
    code = TextTransformation.replacePascalfyFunctionToString(code);

    return code;
  };
}
