import React, { Component } from 'react';
/*import PropTypes from 'prop-types';*/
import AppFrame from '../components/AppFrame';
import CustomersList from './../components/CustomersList';
import CustomersActions from '../components/CustomersActions';


const customers = [
    {   "curp": "98176887",
        "name": "Mich Becerra", 
        "age": 36
    } ,
    {   "curp": "99176999",
        "name": "Israel HS",
        "age": 44
    } ,
    {   "curp": "20176900",
        "name": "Miró HS",
        "age": 18
    }    
]

class CustomersContainer extends Component {

    renderBody = customers => (
        <div>
            <CustomersList 
                customers={customers} 
                urlPath= {'customer/'}>
            </CustomersList>
            <CustomersActions>
                <button onClick={this.handleAddNew}> Nuevo Cliente </button>
            </CustomersActions>
        </div>
    ) 

    render() {
        return (
            <div>
                <AppFrame 
                header={'Listado de Clientes'}
                body={this.renderBody(customers)}>
                </AppFrame>
                
            </div>
        );
    }
}

/*CustomersContainer.propTypes = {

};*/

export default CustomersContainer;
