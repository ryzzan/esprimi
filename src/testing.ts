import { Main } from './index';


const projectPath = '/home/ryzzan/Projects/Kunlatek/test-esprimi';


// import { EXAMPLE_WITHOUT_TABS_FORM } from '../collections-frontend/example-without-tabs-form';
import { EXAMPLE_WITH_TABS_FORM } from '../collections-frontend/example-with-tabs-form';
import { EXAMPLE_TABLE } from '../collections-frontend/example-table';
import { EXAMPLE } from '../collections-frontend/example';



//////////////////////////////////////////////////////////
const main = new Main(),
array = [
    EXAMPLE_WITH_TABS_FORM, EXAMPLE_TABLE, EXAMPLE
];


array.forEach(object => {
    console.log(main.createCode(object, projectPath));    
});