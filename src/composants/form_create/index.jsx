import ManagedInput from '../manageInput';
import { Context } from '../../constants/context';
import { useContext, useEffect, useState } from 'react';
import DataPickerElement from '../dataPicker';
import { states, departments } from '../../constants/options';
import SingleSelect from '../singleSelect';

const unifyString = (v) => v.trim().toLowerCase().split(' ').join('');

//VALIDATEION PART
const Validator = {
    name: (n) => n.trim().length > 1,
};

const Form = ({ setOpenModal }) => {
    const { listEmployees, setListEmployees } = useContext(Context);

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        state: 'AL',
        street: '',
        city: '',
        zipCode: '',
        department: 'sales',
    });

    //add an eemployee in list of employees for display it in table

    const handleSubmit = (event) => {
        event.preventDefault();
        // setIsEmailValidate(Validator.email(email));
        // setIsPasswordIsValidate(Validator.password(password));
        // setIsFirstNameIsValidate(Validator.name(firstName));
        // setIsLastNameIsValidate(Validator.name(lastName));

        //here should to  call an API for do  fetch put  of the employee
        setListEmployees((prevFormData) => {
            const newAr = prevFormData.concat(user);
            return newAr;
        });
        setOpenModal(true);
    };

    return (
        <form id="create-employee" onSubmit={(e) => handleSubmit(e)}>
            <div className="title">Create Employee</div>
            <ManagedInput
                id="firstName"
                type="text"
                name="firstName"
                value={user.firstName}
                setValue={setUser}
                errorMessage="Make sure to enter correct First Name"
                validateField={Validator.name}
            />
            <ManagedInput
                id="lastName"
                type="text"
                name="lastName"
                value={user.lastName}
                setValue={setUser}
                errorMessage="Make sure to enter correct Last Name"
                validateField={Validator.name}
            />
            <ManagedInput
                id="dateOfBirth"
                type="date"
                name="dateOfBirth"
                value={user.dateOfBirth}
                setValue={setUser}
            />
            <ManagedInput
                id="startDate"
                type="date"
                name="startDate"
                value={user.startDate}
                setValue={setUser}
            />

            <fieldset className="address">
                <legend>Address</legend>
                <ManagedInput
                    id="street"
                    type="text"
                    name="street"
                    value={user.street}
                    setValue={setUser}
                    errorMessage="Make sure to enter correct city"
                    validateField={Validator.name}
                />
                <ManagedInput
                    id="city"
                    type="text"
                    name="city"
                    value={user.city}
                    setValue={setUser}
                    errorMessage="Make sure to enter correct city"
                    validateField={Validator.name}
                />

                {/**elemement for display dropdown select. uses local state user */}
                <SingleSelect
                    value={user.state}
                    setValue={setUser}
                    options={states}
                    title="State"
                    nameState="state"
                    id="state"
                />

                <ManagedInput
                    id="zipCode"
                    type="number"
                    name="zipCode"
                    value={user.zipCode}
                    setValue={setUser}
                    errorMessage="Make sure to enter correct zipCode"
                    validateField={Validator.name}
                />
            </fieldset>
            <SingleSelect
                value={user.department}
                setValue={setUser}
                options={departments}
                title="Department"
                nameState="department"
                id="department"
            />

            <button>Save</button>
        </form>
    );
};

export default Form;
