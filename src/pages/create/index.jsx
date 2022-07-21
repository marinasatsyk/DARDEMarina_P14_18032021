import { Link } from 'react-router-dom';
import Form from '../../composants/form_create';

/**
 * creation employee form page element
 * @returns {React.ReactElement} page creation employee form
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
