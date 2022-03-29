import { ModelInterface } from './model';
import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../enums/main";
import { FormInterface } from "./form";
import { ModuleInterface } from "./module";
import { TableInterface } from "./table";
import { TreeInterface } from "./tree";

export interface MainInterface {
  backendFramework?: BackendFrameworkEnum;
  frontendFramework?: FrontendFrameworkEnum;
  envFrontendDev?: string;
  envFrontendProd?: string;
  clonePath?: string;
  projectPath?: any;
  comments?: string;
  form?: FormInterface;
  table?: TableInterface;
  tree?: TreeInterface;
  module?: ModuleInterface;
  model?: ModelInterface;
};

export interface BuildedCode {
  template: string;
  component: string;
  // interfaceComponent: string;
  service: string;
  module: string;
};