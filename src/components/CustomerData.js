import React from 'react';
import PropTypes from 'prop-types';

const CustomerData =({ name, curp, age }) => {
    return (
        <div>
            <div className = "customer-data">
                <h2>Datos del Cliente</h2>
                <div><strong>Nombre<i>{name}</i></strong></div>
                <div><strong>CURP<i>{curp}</i></strong></div>
                <div><strong>Edad<i>{age}</i></strong></div>
            </div>
 
        </div>
    );
};

CustomerData.propTypes = {
    name: PropTypes.string.isRequired,
    curp: PropTypes.string.isRequired,
    age: PropTypes.number,
};

export default CustomerData;