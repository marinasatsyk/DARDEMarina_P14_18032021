import React from 'react';

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
export default BodyGroup;
