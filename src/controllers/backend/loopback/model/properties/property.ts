import { PropertyTypeEnum } from "../../../../../enums/property";
import { MainInterface } from "../../../../../interfaces/main";
import { PropertyInterface } from "../../../../../interfaces/model";

export class CodeToLoopbackModelProperty {
    static customProperties = (object: MainInterface): string => {

        const elements = object.model?.properties;
        const properties = CodeToLoopbackModelProperty.createModelProperties(elements!);

        const componentCode = `${properties}`;

        return componentCode;
    }

    static createModelProperties = (elements: Array<PropertyInterface>): string => {
        let properties = '';

        for (let index = 0; index < elements.length; index++) {
            const element = elements[index];

            if (element.type !== PropertyTypeEnum.Array) {
                properties += `
                            @property({
                                type: '${element.type}',
                                required: ${element.isRequired},
                            })
                            ${element.name}?: ${element.type};
                            `
            }

            if (element.type === PropertyTypeEnum.Array) {
                properties += `
                            @property({
                                type: 'array',
                                itemType: '${element.arrayItemType}',
                            })
                            ${element.name}?: ${element.arrayItemType}[];
                            `
            }
        }

        return properties;
    }
}
