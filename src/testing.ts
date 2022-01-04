import { Main } from './index';

const projectPath = '/home/lopes/Projects/example';

// import { EXAMPLE_WITHOUT_TABS_FORM } from '../collections-frontend/example-without-tabs-form';
import { EXAMPLE_WITH_TABS_FORM } from '../collections-frontend/example/example-with-tabs-form';
import { EXAMPLE_TABLE } from '../collections-frontend/example/example-table';
import { EXAMPLE } from '../collections-frontend/example/example';

//////////////////////////////////////////////////////////
const main = new Main(),
array = [
    EXAMPLE_WITH_TABS_FORM, EXAMPLE_TABLE, EXAMPLE
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