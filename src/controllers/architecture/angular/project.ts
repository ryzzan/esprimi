import * as fs from 'fs';
import * as chp from 'child_process';
import { MainInterface } from '../../../interfaces/main';

export class AngularArchitectureProject {
    static createArchitectureProject = async (
        object: MainInterface
    ) => {
        const projectPath = object.projectPath;
        const clonePath = object.clonePath;
        const projectFolder = projectPath.split(/[\/]+/).pop();
        const splitProjectFolder = projectPath.split(/[\/]+/);
        const projectFolderParent = splitProjectFolder.slice(0, splitProjectFolder.length - 1).join('/');
        const nodeModulePath = `${projectPath}/node_modules`;
        const environmentPath = `${projectPath}/src/environments`;

        try {
            fs.readdirSync(projectPath);
            console.info(`Project folder ${projectPath} already exists.`);
        } catch (error) {
            console.info(`Project folder ${projectPath} doesn't exist.`);
            chp.execSync(
                `git clone ${clonePath} ${projectFolder}`, 
                {cwd: projectFolderParent}
            );

            if (object.envFrontendDev) fs.writeFileSync(`${environmentPath}/environment.ts`, object.envFrontendDev);

            if (object.envFrontendProd) fs.writeFileSync(`${environmentPath}/environment.prod.ts`, object.envFrontendProd);
        }

        try {
            fs.readdirSync(nodeModulePath);
            console.info(`Folder ${nodeModulePath} already exists.`);
        } catch (error) {
            console.info(`Folder node_module isn't created. Running npm install.`);
            chp.execSync(
                `npm install`,
                {cwd: projectPath}
            );
        }
    }
}