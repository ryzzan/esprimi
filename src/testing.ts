import { Main } from './index';

const envFrontDev = `
export const environment = {
    firebase: {
        projectId: 'kunlatek-quickstart',
        appId: '1:61322235717:web:2c454bc7bd593cc6d3f82c',
        storageBucket: 'kunlatek-quickstart.appspot.com',
        apiKey: 'AIzaSyCLOB3dc091tFAuj9LEsarILOBVzL-dqhQ',
        authDomain: 'kunlatek-quickstart.firebaseapp.com',
        messagingSenderId: '61322235717',
        measurementId: 'G-V8W65TSX41',
    },
    baseUrl: 'http://localhost:3000',
    production: false
};`;

const envFrontProd = `
export const environment = {
    firebase: {
        projectId: 'kunlatek-quickstart',
        appId: '1:61322235717:web:2c454bc7bd593cc6d3f82c',
        storageBucket: 'kunlatek-quickstart.appspot.com',
        apiKey: 'AIzaSyCLOB3dc091tFAuj9LEsarILOBVzL-dqhQ',
        authDomain: 'kunlatek-quickstart.firebaseapp.com',
        messagingSenderId: '61322235717',
        measurementId: 'G-V8W65TSX41',
    },
    baseUrl: 'http://localhost:3000',
    production: true
};`;

const envBackend = `PROJECT_ID=`

const cloneFrontendPath = 'https://github.com/ryzzan/kunlatek-quickstart';

const cloneBackendPath = 'https://github.com/kunlabori-teknologio/quickstart-api';

const projectPath = '/home/ryzzan/Projects/example';

/**
 * EXAMPLE
 */
import { ANIMATION_CHART } from '../collections-frontend/example/animation-chart';
import { ANIMATION_FORM } from '../collections-frontend/example/animation-form';
import { ANIMATION_TABLE } from '../collections-frontend/example/animation-table';
import { ANIMATION } from '../collections-frontend/example/animation';

import { CHARACTER_FORM } from '../collections-frontend/example/character-form';
import { CHARACTER_TABLE } from '../collections-frontend/example/character-table';
import { CHARACTER } from '../collections-frontend/example/character';


/**
 * GENERIC TEST
 */
// import {USER_GROUP_FORM} from '../collections-frontend/generic-test/user-group-form';
// import {USER_GROUP_TABLE} from '../collections-frontend/generic-test/user-group-table';
// import {USER_GROUP} from '../collections-frontend/generic-test/user-group';

// import {PERMISSION_GROUP_FORM} from '../collections-frontend/generic-test/permission-group-form';
// import {PERMISSION_GROUP_TABLE} from '../collections-frontend/generic-test/permission-group-table';
// import {PERMISSION_GROUP} from '../collections-frontend/generic-test/permission-group';

/**
 * CLIENT
 */
//  import {PACK_FORM} from '../collections-frontend/clients/daxtv/pack-form';
//  import {PACK_TABLE} from '../collections-frontend/clients/daxtv/pack-table';
//  import {PACK} from '../collections-frontend/clients/daxtv/pack';

// import {PERSON_CLIENT_FORM} from '../collections-frontend/clients/daxtv/person-client-form';
// import {PERSON_CLIENT_TABLE} from '../collections-frontend/clients/daxtv/person-client-table';
// import {PERSON_CLIENT} from '../collections-frontend/clients/daxtv/person-client';

// import {COMPANY_CLIENT_FORM} from '../collections-frontend/clients/daxtv/company-client-form';
// import {COMPANY_CLIENT_TABLE} from '../collections-frontend/clients/daxtv/company-client-table';
// import {COMPANY_CLIENT} from '../collections-frontend/clients/daxtv/company-client';

// import {FINANCE_TABLE} from '../collections-frontend/clients/daxtv/finance-table';
// import {FINANCE} from '../collections-frontend/clients/daxtv/finance';


// TO-DO: FINANCIAL REPORT
//////////////////////////////////////////////////////////
const main = new Main(),
    array = [
        ANIMATION_CHART, ANIMATION_FORM, ANIMATION_TABLE, ANIMATION,
        CHARACTER_FORM, CHARACTER_TABLE, CHARACTER,

        /**
         * GENERIC TEST
         */
        // USER_GROUP_FORM, USER_GROUP_TABLE, USER_GROUP,
        // PERMISSION_GROUP_FORM, PERMISSION_GROUP_TABLE, PERMISSION_GROUP,

        /**
         * CLIENT
         */
        // FINANCE_TABLE, FINANCE,
        // COMPANY_CLIENT_FORM, COMPANY_CLIENT_TABLE, COMPANY_CLIENT,
        // PERSON_CLIENT_FORM, PERSON_CLIENT_TABLE, PERSON_CLIENT,
        // PACK_FORM, PACK_TABLE, PACK,
    ];

array.forEach(object => {
    object.projectPath = projectPath;
    object.cloneFrontendPath = cloneFrontendPath;
    object.cloneBackendPath = cloneBackendPath;
    object.envFrontendDev = envFrontDev;
    object.envFrontendProd = envFrontProd;
    object.envBackend = envBackend;
});

main.createCode(array)
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    });