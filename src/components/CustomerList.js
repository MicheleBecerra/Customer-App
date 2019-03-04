import React from 'react';
import PropTypes from 'prop-types';



const CustomerListItem = ({customers}) => {
    return (
        <div>
            <div className="customer-list">
                {
                    customers.map( c => 
                        <CustomerListItem>
                            key={c.curp}
                            name{c.name}
                            aditAction={'Editar'}
                            delAction={'Eliminar'}
                            urlPath={urlPath}
                        </CustomerListItem>)
                }
            </div>
        </div>
    );
};

CustomerListItem.propTypes = {
    customers: PropTypes.array.isRequired,
};

export default CustomerListItem;