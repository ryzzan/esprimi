import { Main } from './index';

const projectPath = '/home/ryzzan/Projects/Kunlatek/fundamento';

// import { EXAMPLE_WITHOUT_TABS_FORM } from '../collections-frontend/example-without-tabs-form';
import { PROJECT } from '../collections-frontend/fundamento/project';
import { PROJECT_FORM } from '../collections-frontend/fundamento/project-form';
import { PROJECT_TABLE } from '../collections-frontend/fundamento/project-table';

import { MODULE } from '../collections-frontend/fundamento/module';
import { MODULE_FORM } from '../collections-frontend/fundamento/module-form';
import { MODULE_TABLE } from '../collections-frontend/fundamento/module-table';
//////////////////////////////////////////////////////////
const main = new Main(),
array = [
    // EXAMPLE_WITH_TABS_FORM, EXAMPLE_TABLE, EXAMPLE
    PROJECT_FORM, PROJECT_TABLE, PROJECT,
    MODULE_FORM, MODULE_TABLE, MODULE
];

array.forEach(object => {
    object.projectPath = projectPath;
});
    
main.createCode(array)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
});