import './App.css'
// import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
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
      <div style={{ marginTop: 20 }} />

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Name</TableCell>
              <TableCell align="right">Favorites</TableCell>
              <TableCell align="right">Retweets</TableCell>
              <TableCell align="right">Replies</TableCell>
              <TableCell align="right">Impressions</TableCell>
              <TableCell align="right">Rank</TableCell>
              <TableCell align="right">Global Reach</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((item) => (
              <TableRow key={item.index} sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                  <IconButton
                    aria-label="expand row"
                    size="small"
                    onClick={() => console.log("clicked")}
                  >
                    <KeyboardArrowDownIcon />
                  </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.Name}
                </TableCell>
                <TableCell align="right">{item.Favorites}</TableCell>
                <TableCell align="right">{item.Retweets}</TableCell>
                <TableCell align="right">{item.Replies}</TableCell>
                <TableCell align="right">{item.Impressions}</TableCell>
                <TableCell align="right">{item.Rank}</TableCell>
                <TableCell align="right">{item.Global_Reach + "%"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
//     <div className="container">
//       <img className="logo" src="/y00ts-logo.svg" alt="Y00TS Colors" />
//       <h2 className="title">Leaderboard</h2>
//       <img className="leaderboard" src="/y00ts-colors.png" alt="Yoots Logo" />
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Favorites</th>
//             <th>Retweets</th>
//             <th>Replies</th>
//             <th>Impressions</th>
//             <th>Rank</th>
//             <th>Global Reach</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data && data.map((item) => (
//             <tr key={item.index}>
//               <td>{item.Name}</td>
//               <td>{item.Favorites}</td>
//               <td>{item.Retweets}</td>
//               <td>{item.Replies}</td>
//               <td>{item.Impressions}</td>
//               <td>{item.Rank}</td>
//               <td>{item.Global_Reach + "%"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default App;
