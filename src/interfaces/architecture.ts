import { ComponentCodeTypeEnum } from "../enums/architecture";

export interface CreateProjectComponentPathAndFile {
    projectPath: string;
    componentPath: string;
    componentCode: string;
    componentCodeType: ComponentCodeTypeEnum;
    isNest?: boolean;
}

export interface CreateCrudPathAndFile {
    projectPath: string;
}