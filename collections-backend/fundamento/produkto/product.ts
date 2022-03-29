import { PropertyTypeEnum } from './../../../src/enums/property';
import { BackendFrameworkEnum } from './../../../src/enums/main';
import { MainInterface } from "../../../src/interfaces/main";

export const PRODUCT: MainInterface = {
    backendFramework: BackendFrameworkEnum.Loopback,
    model: {
        name: 'Product',
        properties: [
            {
                name: '_id',
                type: PropertyTypeEnum.String,
                isRequired: true,
                isId: true,
            },
            {
                name: 'type',
                type: PropertyTypeEnum.String,
                isRequired: true,
            },
            {
                name: 'groups',
                type: PropertyTypeEnum.Array,
                arrayItemType: PropertyTypeEnum.String,
                isRequired: true,
            },
            {
                name: 'name',
                type: PropertyTypeEnum.String,
                isRequired: true,
            },
            {
                name: 'model',
                type: PropertyTypeEnum.String,
                isRequired: false,
            },
            {
                name: 'description',
                type: PropertyTypeEnum.String,
                isRequired: false,
            },
            {
                name: 'ean13',
                type: PropertyTypeEnum.String,
                isRequired: false,
            },
            {
                name: 'ncm',
                type: PropertyTypeEnum.String,
                isRequired: false,
            },
            {
                name: 'unitOfMeasurement',
                type: PropertyTypeEnum.String,
                isRequired: false,
            },
            {
                name: 'inputArray',
                type: PropertyTypeEnum.Array,
                arrayItemType: PropertyTypeEnum.Object,
                isRequired: false,
            },
            {
                name: 'height',
                type: PropertyTypeEnum.Number,
                isRequired: false,
            },
            {
                name: 'heightUnitOfMeasurement',
                type: PropertyTypeEnum.String,
                isRequired: false,
            },
            {
                name: 'width',
                type: PropertyTypeEnum.Number,
                isRequired: false,
            },
            {
                name: 'width',
                type: PropertyTypeEnum.Number,
                isRequired: false,
            },
            {
                name: 'widthUnitOfMeasurement',
                type: PropertyTypeEnum.String,
                isRequired: false,
            },
            {
                name: 'depth',
                type: PropertyTypeEnum.Number,
                isRequired: false,
            },
            {
                name: 'depthUnitOfMeasurement',
                type: PropertyTypeEnum.String,
                isRequired: false,
            },
        ],
    },
};