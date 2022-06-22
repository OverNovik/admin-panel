import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput: React.FC = () => {
  const [startDate, setStartDate] = useState<
    React.SetStateAction<Date | undefined>
  >(new Date());
  const [endDate, setEndDate] = useState<
    React.SetStateAction<Date | undefined>
  >(new Date());
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: React.SetStateAction<Date | undefined>) =>
          setStartDate(date)
        }
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date: React.SetStateAction<Date | undefined>) =>
          setEndDate(date)
        }
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};

export default DateInput;
