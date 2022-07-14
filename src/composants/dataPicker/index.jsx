import React, { useState } from 'react';
// import DatePicker from 'react-date-picker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DataPickerElement = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
        />

        // <DatePicker
        //     value={selectedDate}
        //     onChange={(date) => setSelectedDate(date)}
        //     dayPlaceholder={''}
        //     monthPlaceholder={''}
        //     yearPlaceholder={''}
        //     format="MM/dd/y"
        //     calendarAriaLabel={'Toggle calendar'}
        //     clearIcon={'null'}
        //     //disable sat sun
        //     // filterDate={(date) =>
        //     //     date.getDay() !== 6 && date.getDay() !== 0
        //     // }
        //     // isClearable
        //     // showYearDropdown
        //     // scrollableYearDropdown
        // />
    );
};

export default DataPickerElement;
