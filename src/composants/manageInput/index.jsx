//@ts-check
import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 *Managed Input is an element for implement into  submit component. 
 Alows a control over input content
 *@returns {React.ReactElement}
 */
const ManagedInput = ({
    id,
    type,
    name,
    value,
    setValue,
    errorMessage,
    validateField,
}) => {
    const [isValid, setValid] = useState(true);

    function handleChange(event) {
        const { name, value, type } = event.target;
        console.log(event.target);
        setValue((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
                // [name]: type === 'text' ? unifyString(value) : value,
            };
        });

        // if there is validate field we ckeck errors

        validateField && setValid(validateField(event.target.value));
    }
    //for display labels
    const labels = {
        city: 'City',
        dateOfBirth: 'Date of Birth',
        department: 'Department',
        firstName: 'First Name',
        lastName: 'Last Name',
        startDate: 'Start Date',
        state: 'State',
        street: 'Street',
        zipCode: 'Zip Code',
    };

    const labelPlaceholder = (id) => {
        return labels[id];
    };
    return (
        <div className="input-wrapper">
            <label htmlFor={id} className={'label-create'}>
                {labelPlaceholder(id)}
            </label>
            <input
                type={type ?? 'text'}
                className="text-control"
                id={id}
                required
                name={name}
                onChange={handleChange}
                value={value}
            />
            {/**if there is validate field we ckeck errors */}

            {validateField && !isValid ? (
                <div
                    style={{
                        color: 'red',
                        fontSize: '15px',
                        fontWeight: 'bold',
                    }}
                    className="error_message"
                >
                    {errorMessage}
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

ManagedInput.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    validateField: PropTypes.func,
};

export default ManagedInput;
