import { BackendFrameworkEnum, FrontendFrameworkEnum } from "../enums/main";
import { FormInterface } from "./form";
import { NestInterface } from "./nest";
import { TableInterface } from "./table";
import { TreeInterface } from "./tree";

export interface MainInterface {
    backendFramework?: BackendFrameworkEnum;
    frontendFramework?: FrontendFrameworkEnum;
    projectPath?: any;
    comments?: string;
    form?: FormInterface;
    table?: TableInterface;
    tree?: TreeInterface;
    nest?: NestInterface;
};

export interface BuildedCode {
  template: string;
  component: string;
  // interfaceComponent: string;
  service: string;
};