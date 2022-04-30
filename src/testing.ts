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

const cloneFrontendPath = 'https://github.com/ryzzan/kunlatek-quickstart';

const cloneBackendPath = 'https://github.com/kunlabori-teknologio/quickstart-api';

const projectPath = '/home/ryzzan/Projects/daxtv';

/**
 * EXAMPLE
 */
// import { EXAMPLE } from '../collections-frontend/example/example';
// import { EXAMPLE_WITHOUT_TABS_FORM } from '../collections-frontend/example/example-without-tabs-form';
// import { EXAMPLE_WITH_TABS_FORM } from '../collections-frontend/example/example-with-tabs-form';


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
import {FINANCE_TABLE} from '../collections-frontend/clients/daxtv/finance-table';
import {FINANCE} from '../collections-frontend/clients/daxtv/finance';

import {COMPANY_CLIENT_FORM} from '../collections-frontend/clients/daxtv/company-client-form';
import {COMPANY_CLIENT_TABLE} from '../collections-frontend/clients/daxtv/company-client-table';
import {COMPANY_CLIENT} from '../collections-frontend/clients/daxtv/company-client';

 // TO-DO: FINANCIAL REPORT
//////////////////////////////////////////////////////////
const main = new Main(),
    array = [
        // EXAMPLE_WITH_TABS_FORM, EXAMPLE_TABLE, EXAMPLE

        /**
         * GENERIC TEST
         */
        // USER_GROUP_FORM, USER_GROUP_TABLE, USER_GROUP,
        // PERMISSION_GROUP_FORM, PERMISSION_GROUP_TABLE, PERMISSION_GROUP,

        /**
         * CLIENT
         */
        FINANCE_TABLE, FINANCE,
        COMPANY_CLIENT_FORM, COMPANY_CLIENT_TABLE, COMPANY_CLIENT,
    ];

array.forEach(object => {
    object.projectPath = projectPath;
    object.cloneFrontendPath = cloneFrontendPath;
    object.cloneBackendPath = cloneBackendPath;
    object.envFrontendDev = envFrontDev;
    object.envFrontendProd = envFrontProd;
});

main.createCode(array)
    .then(res => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    });