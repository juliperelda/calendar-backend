// Se instala moment "npm i moment". Es para el control de fechas.
const moment = require('moment');


// Control de fechas.
const isDate = ( value, { req, location, path } ) => {

    if ( !value ) {
        return false;
    }

    const fecha = moment( value );
    if ( fecha.isValid() ) {
        return true;
    } else {
        return false;
    }

}

module.exports = { isDate };