import { Link } from 'react-router-dom';
import Table from '../../composants/table';
import BasicTable from './BasicTable';

/**
 * employees page element
 * @returns {React.ReactElement} page employees list
 */
const ListEmployee = () => {
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <BasicTable />
            <div className="home">
                <Link to={'/'}>Home</Link>
            </div>
        </div>
    );
};
export default ListEmployee;
