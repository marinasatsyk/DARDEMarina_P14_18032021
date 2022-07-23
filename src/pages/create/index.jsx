import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../../composants/form_create';

/**
 * Create is page contains the form for employee creation
 * @returns {React.ReactElement} page contains the form for employee creation
 */
const Create = () => {
    return (
        <>
            <section id="create-div" className="container">
                <header>
                    <h1 className="create-title title">HRnet</h1>
                </header>

                <Link to="/employees">View Current Employees</Link>

                <Form />
            </section>
        </>
    );
};
export default Create;
