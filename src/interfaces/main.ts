import { ModelInterface } from './model';
import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../enums/main";
import { FormInterface } from "./form";
import { ModuleInterface } from "./module";
import { TableInterface } from "./table";
import { TreeInterface } from "./tree";
import { ChartInterface } from './chart';

export interface MainInterface {
  backendFramework?: BackendFrameworkEnum;
  frontendFramework?: FrontendFrameworkEnum;
  envFrontendDev?: string;
  envFrontendProd?: string;
  envBackend?: string;
  cloneFrontendPath?: string;
  cloneBackendPath?: string;
  projectPath?: any;
  comments?: string;
  form?: FormInterface;
  table?: TableInterface;
  chart?: ChartInterface;
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

export interface BuildedBackendCode {
  model: string;
  controller: string;
  repository?: string;
  service?: string;
}