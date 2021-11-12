import { Main } from './index';

const projectPath = '/home/ryzzan/Projects/Angular/bonstato-admin';

// import { EXAMPLE_WITHOUT_TABS_FORM } from '../collections-frontend/example-without-tabs-form';
// import { EXAMPLE_WITH_TABS_FORM } from '../collections-frontend/example-with-tabs-form';
// import { EXAMPLE_TABLE } from '../collections-frontend/example-table';
// import { EXAMPLE } from '../collections-frontend/example';

// import { APPLICATION_FORM } from '../collections-frontend/admin-module/application-form';
// import { APPLICATION_TABLE } from '../collections-frontend/admin-module/application-table';
// import { APPLICATION } from '../collections-frontend/admin-module/application';
// import { MODULE_FORM } from '../collections-frontend/admin-module/module-form';
// import { MODULE_TABLE } from '../collections-frontend/admin-module/module-table';
// import { MODULE } from '../collections-frontend/admin-module/module';
// import { PERMISSION_GROUP_FORM } from '../collections-frontend/admin-module/permission-group-form';
// import { PERMISSION_GROUP_TABLE } from '../collections-frontend/admin-module/permission-group-table';
// import { PERMISSION_GROUP } from '../collections-frontend/admin-module/permission-group';
// import { PERMISSION_GROUP_MODEL_FORM } from '../collections-frontend/admin-module/permission-group-model-form';
// import { PERMISSION_GROUP_MODEL_TABLE } from '../collections-frontend/admin-module/permission-group-model-table';
// import { PERMISSION_GROUP_MODEL } from '../collections-frontend/admin-module/permission-group-model';
// import { PERMISSION_USER_GROUP_FORM } from '../collections-frontend/admin-module/permission-user-group-form';
// import { PERMISSION_USER_GROUP_TABLE } from '../collections-frontend/admin-module/permission-user-group-table';
// import { PERMISSION_USER_GROUP } from '../collections-frontend/admin-module/permission-user-group';
// import { USER_GROUP_FORM } from '../collections-frontend/admin-module/user-group-form';
// import { USER_GROUP_TABLE } from '../collections-frontend/admin-module/user-group-table';
// import { USER_GROUP } from '../collections-frontend/admin-module/user-group';

import { PERMISSION_GROUP } from '../collections-frontend/bonstato-admin/permission-group';
import { PERMISSION_GROUP_FORM } from '../collections-frontend/bonstato-admin/permission-group-form';
import { PERMISSION_GROUP_TABLE } from '../collections-frontend/bonstato-admin/permission-group-table';
import { PERSON } from '../collections-frontend/bonstato-admin/person';
import { PERSON_FORM } from '../collections-frontend/bonstato-admin/person-form';
import { PERSON_TABLE } from '../collections-frontend/bonstato-admin/person-table';
import { USER_INVITATION } from '../collections-frontend/bonstato-admin/user-invitation';
import { USER_INVITATION_FORM } from '../collections-frontend/bonstato-admin/user-invitation-form';
import { USER_INVITATION_TABLE } from '../collections-frontend/bonstato-admin/user-invitation-table';



//////////////////////////////////////////////////////////
const main = new Main(),
array = [
    // EXAMPLE_WITH_TABS_FORM, EXAMPLE_TABLE, EXAMPLE
    
    // MODULE_FORM, MODULE_TABLE, MODULE,
    // APPLICATION_FORM, APPLICATION_TABLE, APPLICATION,
    // PERMISSION_GROUP_FORM, PERMISSION_GROUP_TABLE, PERMISSION_GROUP,
    // PERMISSION_GROUP_MODEL_FORM, PERMISSION_GROUP_MODEL_TABLE, PERMISSION_GROUP_MODEL,
    // USER_GROUP_FORM, USER_GROUP_TABLE, USER_GROUP,
    // PERMISSION_USER_GROUP, PERMISSION_USER_GROUP_FORM, PERMISSION_USER_GROUP_TABLE,
    
    PERMISSION_GROUP_FORM, PERMISSION_GROUP_TABLE, PERMISSION_GROUP,
    PERSON_FORM, PERSON_TABLE, PERSON,
    USER_INVITATION_FORM, USER_INVITATION_TABLE, USER_INVITATION
];


array.forEach(object => {
    object.projectPath = projectPath;
    
    console.log(main.createCode(object));
});