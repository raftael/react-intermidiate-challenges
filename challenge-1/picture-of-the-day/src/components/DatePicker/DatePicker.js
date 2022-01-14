import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import { useAppContext } from '../../context/AppContext';
import { Types } from '../../context/AppReducer';
import './DatePicker.styles.css';

const DatePickerInput =() => {
 const {state, dispatch} = useAppContext();
 const [startDate, setStartDate] = useState(state.date);

 const handleDateSelect = (date) => {
  dispatch({ type: Types.SEARCH, value: date });  
};
    
  return (
      <div className="datepicker-inputcontainer">
        <p className="pick-date">Choose a date:</p>
        <DatePicker 
          selected={startDate} 
          onSelect={(date) => handleDateSelect(date)} //when day is clicked
          onChange={(date) => setStartDate(date)}     
        />
      </div>
  );
}

export default DatePickerInput;