import './App.css'
import axios from 'axios';
import React, { useState, useEffect } from "react";
// import dotenv from 'dotenv';
// dotenv.config();
// const host = process.env.DATABASE_HOST
// const database_api = process.env.LEADERBOARD_ENDPOINT

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        // const response = await axios.get("http://localhost:8000/api/leaderboard/");
        const response = await axios.get("https://be-community-gamification.onrender.com/api/leaderboard/")
        // const response = axios.get("https://"+host + database_api);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="container">
      <h1 className="title">Leaderboard</h1>
      <table className="table">
        <thead>
          <tr>
            {/* <th>Index</th> */}
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
              {/* <td>{item.index}</td> */}
              <td>{item.Name}</td>
              <td>{item.Favorites}</td>
              <td>{item.Retweets}</td>
              <td>{item.Replies}</td>
              <td>{item.Impressions}</td>
              <td>{item.Rank}</td>
              <td>{item.Global_Reach+"%"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
