import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
// fetch data
// axios.get(`/events/?q=${search}&_page=${offset+1}&_limit=${PAGELIMIT}`)
// iterate over each value and display on screen
class Archive extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  render() {
    return (<div>Hello React!</div>);
  }
}
//   const [allData, setAllData] = useState(null);
//   fetch('http://localhost:3000/events', {
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//   })
//     .then((response) => response.json().events)
//     .then((data) => setAllData(data))
//     .then((data) => console.log(allData));

export default Archive;
