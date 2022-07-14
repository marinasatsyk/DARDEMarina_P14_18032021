import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();
function SingleSelect({ value, setValue, options, title, nameState }) {
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
            <h1>{title}</h1>
            <Select
                classNamePrefix="custom-select"
                // components={animatedComponents}
                onChange={handleChange}
                value={getValue()}
                options={options}
                isSearchable
            />
        </div>
    );
}

export default SingleSelect;
