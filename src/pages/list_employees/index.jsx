import { Link } from 'react-router-dom';
import Table from '../../composants/table';

/**
 * employees page element
 * @returns {React.ReactElement} page employees list
 */
const ListEmployee = () => {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <Table />
            <Link to={'/'}>Home</Link>
        </div>
    );
};
export default ListEmployee;
