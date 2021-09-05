import { CreateProjectComponentPathAndFile } from "../interfaces/architecture";

export type ProjectComponentPathAndFile = Omit <
    CreateProjectComponentPathAndFile,
    'projectPath'
> ;