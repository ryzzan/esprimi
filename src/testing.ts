import { Main } from './index';

const projectPath = '/home/ryzzan/Projects/Kunlatek/landomia-backoffice-realtor';
// const projectPath = '/home/ryzzan/Projects/Kunlatek/fundamento';

// import { EXAMPLE_WITHOUT_TABS_FORM } from '../collections-frontend/example-without-tabs-form';

// import { PROJECT } from '../collections-frontend/fundamento/projekto/project';
// import { PROJECT_FORM } from '../collections-frontend/fundamento/projekto/project-form';
// import { PROJECT_TABLE } from '../collections-frontend/fundamento/projekto/project-table';

// import { MODULE } from '../collections-frontend/fundamento/projekto/module';
// import { MODULE_FORM } from '../collections-frontend/fundamento/projekto/module-form';
// import { MODULE_TABLE } from '../collections-frontend/fundamento/projekto/module-table';

// import { METAVERSE } from '../collections-frontend/fundamento/loko/metaverse';
// import { METAVERSE_FORM } from '../collections-frontend/fundamento/loko/metaverse-form';
// import { METAVERSE_TABLE } from '../collections-frontend/fundamento/loko/metaverse-table';

// import { GALAXY } from '../collections-frontend/fundamento/loko/galaxy';
// import { GALAXY_FORM } from '../collections-frontend/fundamento/loko/galaxy-form';
// import { GALAXY_TABLE } from '../collections-frontend/fundamento/loko/galaxy-table';

// import { STELAR_SYSTEM } from '../collections-frontend/fundamento/loko/stelar-system';
// import { STELAR_SYSTEM_FORM } from '../collections-frontend/fundamento/loko/stelar-system-form';
// import { STELAR_SYSTEM_TABLE } from '../collections-frontend/fundamento/loko/stelar-system-table';

// import { PLANETARY_SYSTEM } from '../collections-frontend/fundamento/loko/planetary-system';
// import { PLANETARY_SYSTEM_FORM } from '../collections-frontend/fundamento/loko/planetary-system-form';
// import { PLANETARY_SYSTEM_TABLE } from '../collections-frontend/fundamento/loko/planetary-system-table';

// import { PLANET } from '../collections-frontend/fundamento/loko/planet';
// import { PLANET_FORM } from '../collections-frontend/fundamento/loko/planet-form';
// import { PLANET_TABLE } from '../collections-frontend/fundamento/loko/planet-table';

// import { CONTINENT } from '../collections-frontend/fundamento/loko/continent';
// import { CONTINENT_FORM } from '../collections-frontend/fundamento/loko/continent-form';
// import { CONTINENT_TABLE } from '../collections-frontend/fundamento/loko/continent-table';

// import { COUNTRY } from '../collections-frontend/fundamento/loko/country';
// import { COUNTRY_FORM } from '../collections-frontend/fundamento/loko/country-form';
// import { COUNTRY_TABLE } from '../collections-frontend/fundamento/loko/country-table';

// import { STATE } from '../collections-frontend/fundamento/loko/state';
// import { STATE_FORM } from '../collections-frontend/fundamento/loko/state-form';
// import { STATE_TABLE } from '../collections-frontend/fundamento/loko/state-table';

// import { CITY } from '../collections-frontend/fundamento/loko/city';
// import { CITY_FORM } from '../collections-frontend/fundamento/loko/city-form';
// import { CITY_TABLE } from '../collections-frontend/fundamento/loko/city-table';

// import { DISTRICT } from '../collections-frontend/fundamento/loko/district';
// import { DISTRICT_FORM } from '../collections-frontend/fundamento/loko/district-form';
// import { DISTRICT_TABLE } from '../collections-frontend/fundamento/loko/district-table';

// import { ADDRESS } from '../collections-frontend/fundamento/loko/address';
// import { ADDRESS_FORM } from '../collections-frontend/fundamento/loko/address-form';
// import { ADDRESS_TABLE } from '../collections-frontend/fundamento/loko/address-table';

// import { ZIPCODE } from '../collections-frontend/fundamento/loko/zipcode';
// import { ZIPCODE_FORM } from '../collections-frontend/fundamento/loko/zipcode-form';
// import { ZIPCODE_TABLE } from '../collections-frontend/fundamento/loko/zipcode-table';

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
    // MODULE_FORM, MODULE_TABLE, MODULE,
    // METAVERSE_FORM, METAVERSE_TABLE, METAVERSE,
    // GALAXY_FORM, GALAXY_TABLE, GALAXY,
    // STELAR_SYSTEM_FORM, STELAR_SYSTEM_TABLE, STELAR_SYSTEM,
    // PLANETARY_SYSTEM_FORM, PLANETARY_SYSTEM_TABLE, PLANETARY_SYSTEM,
    // PLANET_FORM, PLANET_TABLE, PLANET,
    // CONTINENT_FORM, CONTINENT_TABLE, CONTINENT,
    // COUNTRY_FORM, COUNTRY_TABLE, COUNTRY,
    // STATE_FORM, STATE_TABLE, STATE,
    // CITY_FORM, CITY_TABLE, CITY,
    // DISTRICT_FORM, DISTRICT_TABLE, DISTRICT,
    // ADDRESS_FORM, ADDRESS_TABLE, ADDRESS,
    // ZIPCODE_FORM, ZIPCODE_TABLE, ZIPCODE

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