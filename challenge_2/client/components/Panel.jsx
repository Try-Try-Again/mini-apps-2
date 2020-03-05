import React, { useState } from 'react';
import Display from './Display';

const convert = (str) => {
  const date = new Date(str);
  const mnth = (`0${date.getMonth() + 1}`).slice(-2);
  const day = (`0${date.getDate()}`).slice(-2);
  return [date.getFullYear(), mnth, day].join('-');
};


const Panel = () => {
  const currentDate = new Date();
  const weekAgo = new Date(currentDate.getTime() - 14 * 24 * 60 * 60 * 1000);

  const [endDate, setEndDate] = useState(convert(currentDate));
  const [startDate, setStartDate] = useState(convert(weekAgo));


  const startChange = (e) => {
    setStartDate(e.target.value);
    console.log(startDate);
  };

  const endChange = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div>
      <input type="date" id="start" value={startDate} onChange={startChange} />
      <input type="date" id="end" value={endDate} onChange={endChange} />
      <div>
        Showing activity from
        {startDate}
        {' '}
        to
        {' '}
        {endDate}
      </div>
      <Display start={startDate} end={endDate} />
    </div>
  );
};


export default Panel;
