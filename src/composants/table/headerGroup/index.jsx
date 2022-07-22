import React from 'react';
import PropTypes from 'prop-types';
/**
 *
 * @returns {React.ReactElement} component table
 */
function HeaderGroup({ headerGroups }) {
    return (
        <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th
                            {...column.getHeaderProps(
                                column.getSortByToggleProps()
                            )}
                        >
                            {column.render('Header')}
                            <span>
                                {column.isSorted
                                    ? column.isSortedDesc
                                        ? '🔽'
                                        : '🔼'
                                    : ''}
                            </span>
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
    );
}

HeaderGroup.propTypes = {
    headerGroups: PropTypes.array.isRequired,
};
export default HeaderGroup;
