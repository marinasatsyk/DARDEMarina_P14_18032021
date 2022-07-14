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
    // const [user, setUser] = useState({
    //     city: city,
    //     dateOfBirth: dateOfBirth,
    //     department: department,
    //     firstName: firstName,
    //     lastName: lastName,
    //     startDate: startDate,
    //     state: state,
    //     street: street,
    //     zipCode: zipCode,
    // });
    const [listEmployees, setListEmployees] = useState([]);

    return (
        <Context.Provider
            value={{
                // city,
                // setCity,
                // dateOfBirth,
                // setDateOfBirth,
                // department,
                // setDepartment,
                // firstName,
                // setFirstName,
                // lastName,
                // setLastName,
                // startDate,
                // setStartDate,
                // state,
                // setState,
                // street,
                // setStreet,
                // zipCode,
                // setZipCode,

                listEmployees,
                setListEmployees,
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
