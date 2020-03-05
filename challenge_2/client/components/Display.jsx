import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';


const Display = ({ start, end }) => {
  const [labels, setLabels] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    console.log('RE-RENDERING!');
    fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${start}&end=${end}`)
      .then((res) => res.json())
      .then((result) => {
        setLabels(Object.keys(result.bpi));
        setPrices(Object.values(result.bpi));
      });
  }, []);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Prices',
        data: prices,
      },
    ],
  };

  return (
    <div>
      <Line
        data={chartData}
      />
    </div>
  );
};

Display.propTypes = {
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
export default Display;
