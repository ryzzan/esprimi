import { Main } from './index';

const projectPath = '/home/ryzzan/Projects/Kunlatek/landomia-backoffice-realtor';

// import { EXAMPLE_WITHOUT_TABS_FORM } from '../collections-frontend/example-without-tabs-form';
// import { PROJECT } from '../collections-frontend/fundamento/project';
// import { PROJECT_FORM } from '../collections-frontend/fundamento/project-form';
// import { PROJECT_TABLE } from '../collections-frontend/fundamento/project-table';

// import { MODULE } from '../collections-frontend/fundamento/module';
// import { MODULE_FORM } from '../collections-frontend/fundamento/module-form';
// import { MODULE_TABLE } from '../collections-frontend/fundamento/module-table';

import { REALTY_RATE_PARAMETER_FORM } from '../collections-frontend/landomia/realty-rate-parameter-form';
import { REALTY_RATE_PARAMETER_TABLE } from '../collections-frontend/landomia/realty-rate-parameter-table';
import { REALTY_RATE_PARAMETER } from '../collections-frontend/landomia/realty-rate-parameter';

import { REALTY_ROOM_FORM } from '../collections-frontend/landomia/realty-room-form';
import { REALTY_ROOM_TABLE } from '../collections-frontend/landomia/realty-room-table';
import { REALTY_ROOM } from '../collections-frontend/landomia/realty-room';

import { REALTY_TYPE_FORM } from '../collections-frontend/landomia/realty-type-form';
import { REALTY_TYPE_TABLE } from '../collections-frontend/landomia/realty-type-table';
import { REALTY_TYPE } from '../collections-frontend/landomia/realty-type';

import { REALTY_BUSINESS_TYPE_FORM } from '../collections-frontend/landomia/realty-business-type-form';
import { REALTY_BUSINESS_TYPE_TABLE } from '../collections-frontend/landomia/realty-business-type-table';
import { REALTY_BUSINESS_TYPE } from '../collections-frontend/landomia/realty-business-type';

import { REALTY_FORM } from '../collections-frontend/landomia/realty-form';
import { REALTY_TABLE } from '../collections-frontend/landomia/realty-table';
import { REALTY } from '../collections-frontend/landomia/realty';

//////////////////////////////////////////////////////////
const main = new Main(),
array = [
    // EXAMPLE_WITH_TABS_FORM, EXAMPLE_TABLE, EXAMPLE
    // PROJECT_FORM, PROJECT_TABLE, PROJECT,
    // MODULE_FORM, MODULE_TABLE, MODULE

    REALTY_TYPE_FORM,REALTY_TYPE_TABLE,REALTY_TYPE,
    REALTY_BUSINESS_TYPE_FORM,REALTY_BUSINESS_TYPE_TABLE,REALTY_BUSINESS_TYPE,
    REALTY_ROOM_FORM, REALTY_ROOM_TABLE, REALTY_ROOM,
    REALTY_RATE_PARAMETER_FORM, REALTY_RATE_PARAMETER_TABLE, REALTY_RATE_PARAMETER,
    REALTY_FORM, REALTY_TABLE, REALTY,
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