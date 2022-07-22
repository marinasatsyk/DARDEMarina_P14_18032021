import React from 'react';
import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();
/**
 * Provider for all elements state manager
 * @param {*} {React.ReactElement.children}
 * @returns {React.ReactElement}
 */
const DataProvider = ({ children }) => {
    const [listEmployees, setListEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    return (
        <Context.Provider
            value={{
                listEmployees,
                setListEmployees,
                isLoading,
                setIsLoading,
                error,
                setError,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default DataProvider;

DataProvider.propTypes = {
    children: PropTypes.any,
};
