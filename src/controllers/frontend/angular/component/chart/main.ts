import {
  MainInterface
} from "../../../../../interfaces/main";
import { CodeToAngularChartComponentConstructorArg } from "./constructor-arg";
import { CodeToAngularChartComponentConstructorParam } from "./constructor-param";
import {
  CodeToAngularChartComponentImport
} from "./import";
import { CodeToAngularChartComponentMethod } from "./method";
import { CodeToAngularChartComponentProperty } from "./property";

export class CodeToAngularChartComponent {
  createProperty = (object: MainInterface): string => {
      console.info(`Dealing with properties in ${object.chart?.id}`);
      return CodeToAngularChartComponentProperty.customProperties(object);
  }

  createConstructorParams = (object: MainInterface): string => {
      console.info(`Dealing with constructor params in ${object.form?.title}`);
      return CodeToAngularChartComponentConstructorParam.customConstructorParam(object);
  }

  createConstructorArg = (object: MainInterface): string => {
      return CodeToAngularChartComponentConstructorArg.customConstructorArg(object);
  }

  createImport = (object: MainInterface): string => {
      console.info(`Dealing with imports in ${object.chart?.id}`);
      return CodeToAngularChartComponentImport.customImports(object);
  }

  createMethod = (object: MainInterface): string => {
      console.info(`Dealing with methods in ${object.chart?.id}`);
      return CodeToAngularChartComponentMethod.customMethod(object);
  }
}