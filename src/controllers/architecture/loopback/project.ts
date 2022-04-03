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
            fs.writeFileSync(
                `${projectPath}/.env`,
                `
PORT=3000
SERVER_ROOT_URI=http://localhost
CLIENT_REDIRECT_URI=http://localhost:4200
MONGO_URL=mongodb+srv://kunlatek:Kunlatek751@cluster0.b0pfr.mongodb.net/fundamento\n
PROJECT_ID=\n
NODEMAILER_USER=
NODEMAILER_PASS=
                `
            );
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