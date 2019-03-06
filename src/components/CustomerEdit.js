import React from 'react';
import PropTypes from 'prop-types';


const CustomerEdit = ({ name, curp, age })=> {
    return (
        <div>
            <h2>Edición del cliente</h2>    
            <br />
            <h3>Nombre: {name} / CURP: {curp} / Edad: {age}</h3>
        </div>
    );
};


//No se pide isRequire por que puede no haber algo en el edit.
CustomerEdit.propTypes = {
    name: PropTypes.string,
    curp: PropTypes.string,
    age:  PropTypes.string,
};

export default CustomerEdit;