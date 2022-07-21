import { Link } from 'react-router-dom';
import Form from '../../composants/form_create';
import { useState } from 'react';
import Modal from '../../composants/modal';

/**
 * creation employee form page element
 * @returns {React.ReactElement} page creation employee form
 */
const Create = () => {
    //states for open modal page
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <section id="create-div" className="container">
                <header>
                    <h1 className="create-title title">HRnet</h1>
                </header>

                <Link to="/employees">View Current Employees</Link>

                <Form setOpenModal={setOpenModal} />
            </section>
            {openModal && (
                <Modal
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                    message="Employee Created!"
                />
            )}
        </>
    );
};
export default Create;
