//@ts-check
import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import PropTypes from 'prop-types';

const animatedComponents = makeAnimated();

/**
 * component select based on librairie react-select
 * @returns {React.ReactElement} component single select
 */
function SingleSelect({ value, setValue, options, title, nameState, id }) {
    const getValue = () => {
        return value ? options.find((c) => c.value === value) : '';
    };

    //return state user changed with modified requested part
    function handleChange(newValue) {
        console.log(newValue);
        setValue((prevValue) => {
            return {
                ...prevValue,
                [nameState]: newValue.value,
            };
        });
    }
    return (
        <div className="select">
            <label htmlFor={id} className={'label-create'}>
                {title}
            </label>
            <Select
                classNamePrefix="custom-select"
                // components={animatedComponents}
                onChange={handleChange}
                value={getValue()}
                options={options}
                isSearchable
                id={id}
            />
        </div>
    );
}

SingleSelect.propTypes = {
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ),
    title: PropTypes.string.isRequired,
    nameState: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
export default SingleSelect;
