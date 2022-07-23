import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Functionality of table for do global filter
 * @returns {React.ReactElement} component global filter
 */
const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);

    return (
        <span>
            Search:{' '}
            <input
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value);
                    setFilter(e.target.value || undefined);
                }}
            />
        </span>
    );
};
GlobalFilter.propTypes = {
    filter: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    setFilter: PropTypes.func.isRequired,
};
export default GlobalFilter;
