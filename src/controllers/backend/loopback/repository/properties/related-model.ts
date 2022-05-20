export class CodeToLoopbackRepositoryModelRelated {

    createRepositoryRelatedModels = (mainProperty: string, secondProperty: string): string => {

        const mainPropertyCamelCase = mainProperty.charAt(0).toLowerCase() + mainProperty.slice(1)
        const secondPropertyCamelCase = secondProperty.charAt(0).toLowerCase() + secondProperty.slice(1)

        return `
            @model()
            class ${mainProperty}Has${secondProperty} extends Entity {
                @property({ type: 'string', id: true, generated: true })
                _id?: string;
                
                @property()
                ${mainPropertyCamelCase}Id?: string;
                
                @property()
                ${secondPropertyCamelCase}Id?: string;
                
                constructor(data?: Partial<${mainProperty}Has${secondProperty}>) {
                    super(data);
                }
            }
            interface ${mainProperty}Has${secondProperty}Relations {}
            type ${mainProperty}Has${secondProperty}WithRelations = ${mainProperty}Has${secondProperty} & ${mainProperty}Has${secondProperty}Relations;

            class ${mainProperty}Has${secondProperty}Repository extends DefaultCrudRepository<
                ${mainProperty}Has${secondProperty},
                typeof ${mainProperty}Has${secondProperty}.prototype._id,
                ${mainProperty}Has${secondProperty}Relations
            > {
                constructor(
                    @inject('datasources.mongodb') dataSource: MongodbDataSource,
                ) {
                    super(${mainProperty}Has${secondProperty}, dataSource);
                }
            }
        `
    }
}
