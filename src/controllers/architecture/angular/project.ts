import * as fs from 'fs';
import * as chp from 'child_process';

export class AngularArchitectureProject {
    static createArchitectureProject = (
        projectPath: string
    ) => {
        const projectFolder = projectPath.split(/[\/]+/).pop();
        const splitProjectFolder = projectPath.split(/[\/]+/);
        const projectFolderParent = splitProjectFolder.slice(0, splitProjectFolder.length - 1).join('/');
        const nodeModulePath = `${projectPath}/node_modules`;

        try {
            fs.readdirSync(projectPath);
            console.info(`Projeto existente.`);
        } catch (error) {
            console.info(`Pasta de projeto inexistente.`);
            chp.execSync(
                `git clone https://github.com/ryzzan/rapida-komenco ${projectFolder}`, 
                {cwd: projectFolderParent}
            );
        }

        try {
            fs.readdirSync(nodeModulePath);
            console.info(`Pasta node_module existente.`);
        } catch (error) {
            console.info(`Pasta node_module inexistente.`);
            chp.execSync(
                `npm install`,
                {cwd: projectPath}
            );
        }
    }
}