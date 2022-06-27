import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const onChangeStartDate = (date: Date | null) => setStartDate(date);

  const onChangeEndDate = (date: Date | null) => setEndDate(date);

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={onChangeStartDate}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={onChangeEndDate}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </>
  );
};

export default DateInput;
