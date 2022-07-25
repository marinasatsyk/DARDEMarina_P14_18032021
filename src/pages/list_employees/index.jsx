import React from 'react';
import { Link } from 'react-router-dom';
import BasicTable from '../../composants/table/BasicTable';

/**
 * employees page component
 * @returns {React.ReactElement} table contains the list of all employees
 */
const ListEmployee = () => {
    return (
        <div id="employee-div" className="container">
            <h1 className="employee-title title">Current Employees</h1>
            <BasicTable />
            <div className="home">
                <Link to={'/'} className="link">
                    Home
                </Link>
            </div>
        </div>
    );
};
export default ListEmployee;
