// src/Top10Data.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Top10Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    axios.get(process.env.REACT_APP_BACKEND_URL) 
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Top 10 Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last</th>
            <th>Buy</th>
            <th>Sell</th>
            <th>Volume</th>
            <th>Base Unit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.last}</td>
              <td>{item.buy}</td>
              <td>{item.sell}</td>
              <td>{item.volume}</td>
              <td>{item.base_unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Top10Data;
