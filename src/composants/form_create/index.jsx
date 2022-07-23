//@ts-check
import React, { useEffect, useState, useContext } from 'react';
import ManagedInput from '../manageInput';
import { states, departments } from '../../constants/options';
import SingleSelect from '../singleSelect';
import { Modal, useModal } from 'darde_p14_modal_lib';
import { unifyString, Validator } from './validators';
import { SpinnerCircular } from 'spinners-react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getListPending,
    stopListPending,
    getListSuccess,
    getListFail,
} from '../../constants/features/ListEmployeesSlice';

/**
 *Submit form for creation of employees. Send the data in the global state "listEmployees"
 * @returns {React.ReactElement} form submit
 */
const Form = () => {
    //we use the set of global state for populate after submit
    const dispatch = useDispatch();

    const { listEmployees, isLoading, error } = useSelector(
        //@ts-ignore
        (store) => store.list
    );
    //local state for one employee
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

    const [isFirstNameValidate, setIsFirstNameValidate] = useState(false);
    const [isLastNameValidate, setIsLastNameValidate] = useState(false);
    const [isDateOfBirthValidate, setIsDateOfBirtValidate] = useState(false);
    const [isStartDateValidate, setIsStartDateValidate] = useState(false);
    const [isStateValidate, setIsStateValidate] = useState(false);
    const [isStreetValidate, setIsStreetValidate] = useState(false);
    const [isCityValidate, setIsCityValidate] = useState(false);
    const [isZipCodeValidate, setIsZipCodeValidate] = useState(false);
    const [isDepartmentValidate, setIsDepartmentValidate] = useState(false);

    //we use a hook of the  modal library
    const { isModalOpened: isEmployeeCreated, toggle: toggleEmployeeCreated } =
        useModal();

    //add an employee in list of employees for display it in table
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('handlesubmit');
        setIsFirstNameValidate(Validator.stringVerif(user.firstName));
        setIsLastNameValidate(Validator.stringVerif(user.lastName));
        setIsDateOfBirtValidate(Validator.date(user.dateOfBirth));
        setIsStartDateValidate(Validator.date(user.startDate));
        setIsStateValidate(Validator.stringVerif(user.state));
        setIsStreetValidate(Validator.stringVerif(user.street));
        setIsCityValidate(Validator.stringVerif(user.city));
        //@ts-ignore
        setIsZipCodeValidate(Validator.zipCode(user.zipCode));
        setIsDepartmentValidate(Validator.stringVerif(user.department));
    };
    useEffect(() => {
        console.log('useEffect');
        const addEmployee = () => {
            if (
                isFirstNameValidate &&
                isLastNameValidate &&
                isDateOfBirthValidate &&
                isStartDateValidate &&
                isStateValidate &&
                isStreetValidate &&
                isCityValidate &&
                isZipCodeValidate &&
                isDepartmentValidate
            ) {
                try {
                    dispatch(getListPending());
                    dispatch(getListSuccess(user));
                    toggleEmployeeCreated();

                    //restore initial states
                    setIsFirstNameValidate(false);
                    setIsLastNameValidate(false);
                    setIsDateOfBirtValidate(false);
                    setIsStartDateValidate(false);
                    setIsStateValidate(false);
                    setIsStreetValidate(false);
                    setIsCityValidate(false);
                    setIsZipCodeValidate(false);
                    setIsDepartmentValidate(false);
                    setUser({
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
                } catch (err) {
                    getListFail(err);
                }
            }
        };
        addEmployee();
    }, [
        isFirstNameValidate,
        isLastNameValidate,
        isDateOfBirthValidate,
        isStartDateValidate,
        isStateValidate,
        isStreetValidate,
        isCityValidate,
        isZipCodeValidate,
        isDepartmentValidate,
        listEmployees,
        listEmployees,
        isLoading,
    ]);

    return (
        <>
            <form id="create-employee" onSubmit={(e) => handleSubmit(e)}>
                <div className="title">Create Employee</div>
                <ManagedInput
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={user.firstName}
                    setValue={setUser}
                    errorMessage="Make sure to enter correct First Name"
                    validateField={Validator.stringVerif}
                />
                <ManagedInput
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={user.lastName}
                    setValue={setUser}
                    errorMessage="Make sure to enter correct Last Name"
                    validateField={Validator.stringVerif}
                />
                <ManagedInput
                    id="dateOfBirth"
                    type="date"
                    name="dateOfBirth"
                    value={user.dateOfBirth}
                    setValue={setUser}
                    errorMessage="Make sure to enter correct date Of Birth"
                    validateField={Validator.date}
                />
                <ManagedInput
                    id="startDate"
                    type="date"
                    name="startDate"
                    value={user.startDate}
                    setValue={setUser}
                    errorMessage="Make sure to enter correct start Date"
                    validateField={Validator.date}
                />

                <fieldset className="address">
                    <legend>Address</legend>
                    <ManagedInput
                        id="street"
                        type="text"
                        name="street"
                        value={user.street}
                        setValue={setUser}
                        errorMessage="Make sure to enter correct address"
                        validateField={Validator.stringVerif}
                    />
                    <ManagedInput
                        id="city"
                        type="text"
                        name="city"
                        value={user.city}
                        setValue={setUser}
                        errorMessage="Make sure to enter correct city"
                        validateField={Validator.stringVerif}
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
                        errorMessage="Make sure to enter correct zip Code"
                        validateField={Validator.zipCode}
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
            <Modal
                isModalOpened={isEmployeeCreated}
                hide={toggleEmployeeCreated}
                title="Employee Created"
            ></Modal>
            {isLoading && (
                <SpinnerCircular
                    size={50}
                    thickness={100}
                    speed={100}
                    color="rgba(59, 57, 172, 1)"
                    secondaryColor="rgba(0, 0, 0, 0.44)"
                />
            )}
        </>
    );
};

export default Form;
