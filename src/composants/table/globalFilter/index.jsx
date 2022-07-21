import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter);
    //debouncing
    // const onChange = useAsyncDebounce((value) => {
    //     setFilter(value || undefined);
    // }, 1);
    // const onChange = useAsyncDebounce((value) => {
    //     setFilter(value || undefined);
    // }, 1);
    return (
        <span>
            Search:{' '}
            <input
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value);
                    // onChange(e.target.value);
                    setFilter(e.target.value || undefined);
                }}
            />
        </span>
    );
};

export default GlobalFilter;
