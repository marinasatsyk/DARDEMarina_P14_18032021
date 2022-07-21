import React, { useState } from 'react';

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

export default GlobalFilter;
