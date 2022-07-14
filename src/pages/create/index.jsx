import { Link } from 'react-router-dom';
import DataPickerElement from '../../composants/dataPicker';
import Form from '../../composants/form_create';
/**
 * creation employee form page element
 * @returns {React.ReactElement} page creation employee form
 */
const Create = () => {
    return (
        <section id="create-div" className="container">
            <header>
                <h1 className="title">HRnet</h1>
            </header>

            <Link to="/eployees">View Current Employees</Link>
            <h3>Create Employee</h3>
            <Form />
        </section>
    );
};
export default Create;
