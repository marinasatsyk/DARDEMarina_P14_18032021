import React from 'react';
import PropTypes from 'prop-types';

/**
 *This is component witch render all body content  of table into a cells
 * *@returns {React.ReactElement} table's body content
 */
const BodyGroup = ({ getTableBodyProps, page, prepareRow }) => {
    return (
        <tbody {...getTableBodyProps()}>
            {page.map((row) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return (
                                <td {...cell.getCellProps()}>
                                    {cell.render('Cell')}
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};
BodyGroup.propTypes = {
    getTableBodyProps: PropTypes.func.isRequired,
    page: PropTypes.array.isRequired,
    prepareRow: PropTypes.func.isRequired,
};
export default BodyGroup;
