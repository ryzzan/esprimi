import { PropertyTypeEnum } from "../enums/property";

export interface ModelInterface {
    name: string;
    properties: PropertyInterface[],
}

export interface PropertyInterface {
    name: string;
    type: PropertyTypeEnum,
    isRequired: boolean,
    isId?: boolean,
    arrayItemType?: PropertyTypeEnum,
}