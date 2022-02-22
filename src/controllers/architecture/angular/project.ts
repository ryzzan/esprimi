import * as fs from 'fs';
import * as chp from 'child_process';

export class AngularArchitectureProject {
    static createArchitectureProject = async (
        projectPath: string
    ) => {
        const projectFolder = projectPath.split(/[\/]+/).pop();
        const splitProjectFolder = projectPath.split(/[\/]+/);
        const projectFolderParent = splitProjectFolder.slice(0, splitProjectFolder.length - 1).join('/');
        const nodeModulePath = `${projectPath}/node_modules`;

        try {
            fs.readdirSync(projectPath);
            console.info(`Project folder ${projectPath} already exists.`);
        } catch (error) {
            console.info(`Project folder ${projectPath} doesn't exist.`);
            chp.execSync(
                `git clone https://github.com/ryzzan/lopes-quickstart ${projectFolder}`, 
                {cwd: projectFolderParent}
            );
        }

        try {
            fs.readdirSync(nodeModulePath);
            console.info(`Folder ${nodeModulePath} already exists.`);
        } catch (error) {
            console.info(`Folder node_module isn't created. Going to run npm install.`);
            chp.execSync(
                `npm install`,
                {cwd: projectPath}
            );
        }
    }
}