import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';

//Contendor que nos serira para no replicar codigo

const AppFrame = ({header, body }) => {
    return (
        <div>
            <div className="app-frame">
                <AppHeader title={ header }></AppHeader>
                <div>{ body }</div>
                <div>{ 'Aplicacion de Ejemplo' }</div>

            </div>
        
        </div>
    );
};

AppFrame.propTypes = {
    header: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
};

export default AppFrame;