import * as fs from 'fs';
import * as chp from 'child_process';
import { MainInterface } from '../../../interfaces/main';

export class LoopbackArchitectureProject {
    static createArchitectureProject = async (
        object: MainInterface
    ) => {
        const projectPath = `${object.projectPath}-api`;
        const clonePath = object.cloneBackendPath;
        const projectFolder = projectPath.split(/[\/]+/).pop();
        const splitProjectFolder = projectPath.split(/[\/]+/);
        const projectFolderParent = splitProjectFolder.slice(0, splitProjectFolder.length - 1).join('/');
        const nodeModulePath = `${projectPath}/node_modules`;
        // const environmentPath = `${projectPath}/`;

        try {
            fs.readdirSync(projectPath);
            console.info(`Project folder ${projectPath} already exists.`);
        } catch (error) {
            console.info(`Project folder ${projectPath} doesn't exist.`);
            chp.execSync(
                `git clone ${clonePath} ${projectFolder}`,
                { cwd: projectFolderParent }
            );

            // if (object.envFrontendDev) fs.writeFileSync(`${environmentPath}/environment.ts`, object.envFrontendDev);
        }

        try {
            fs.readdirSync(nodeModulePath);
            console.info(`Folder ${nodeModulePath} already exists.`);
        } catch (error) {
            console.info(`Folder node_module isn't created. Running npm install.`);
            chp.execSync(
                `npm install`,
                { cwd: projectPath }
            );
        }
    }
}