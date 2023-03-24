import './App.css'
import axios from 'axios';
import React, { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      fetch('https://be-community-gamification.onrender.com/api/leaderboard/')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setData(data);
        })
        .catch(error => {
          console.error(error);
        });
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="container">
      <img className="logo" src="/y00ts-logo.svg" alt="Y00TS Colors" />
      <h2 className="title">Leaderboard</h2>
      <img className="leaderboard" src="/y00ts-colors.png" alt="Yoots Logo" />
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Favorites</th>
            <th>Retweets</th>
            <th>Replies</th>
            <th>Impressions</th>
            <th>Rank</th>
            <th>Global Reach</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => (
            <tr key={item.index}>
              <td>{item.Name}</td>
              <td>{item.Favorites}</td>
              <td>{item.Retweets}</td>
              <td>{item.Replies}</td>
              <td>{item.Impressions}</td>
              <td>{item.Rank}</td>
              <td>{item.Global_Reach + "%"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
