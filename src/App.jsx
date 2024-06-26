// COMPRESSIBLE TABLE VERSION
import './App.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';
import React, { useState, useEffect } from "react";
import '@fontsource/roboto/500.css';

function CollapsibleTableRow(props) {
  const { item } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow key={item.index} sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={item.PFP_Url} alt={item.Name} sx={{ mr: 2 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{item.Name}</div>
          </div>
        </div>
      </TableCell>
      {/* <TableCell align="right">{item.Rank}</TableCell> */}
      {/* <TableCell align="right">{item.Global_Reach + "%"}</TableCell> */}
      <TableCell align="right">{item.Impressions}</TableCell>
    </TableRow>
    {open && (
  <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
      <div className='expanded-dropdown' style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "1rem" }}>Bio: {item.Description}</div>
          {item.Bio_Link !== "None" && (
            <div>
              Url:{" "}
              <a href={item.Bio_Link} target="_blank" rel="noreferrer">
                {item.Bio_Link}
              </a>
            </div>
          )}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div style={{ textAlign: "right" }}>Favorites:</div>
          <div style={{ textAlign: "right" }}>Retweets:</div>
          <div style={{ textAlign: "right" }}>Replies:</div>
          <div style={{ textAlign: "right" }}>{item.Favorites}</div>
          <div style={{ textAlign: "right" }}>{item.Retweets}</div>
          <div style={{ textAlign: "right" }}>{item.Replies}</div>
        </div>
      </div>
    </TableCell>
  </TableRow>
)}
    </>
  );
}

function App() {
  const [data, setData] = useState([]);
  // const [socket, setSocket] = useState(null);
  useEffect(() => {
    async function fetchData() {
      fetch('https://be-community-gamification.onrender.com/api/engagement/')
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
  
  // useEffect(() => {
  //   const newSocket = new WebSocket("ws://red-cgl4c5u4dad69r5ov8b0::6379/ws/leaderboard_updates/");
  
  //   newSocket.onopen = () => {
  //     console.log("WebSocket connection established.");
  //     setSocket(newSocket);
  //   };
  
  //   newSocket.onclose = () => {
  //     console.log("WebSocket connection closed.");
  //     setSocket(null);
  //   };
  
  //   return () => {
  //     if (socket !== null) {
  //       socket.close();
  //       setSocket(null);
  //     }
  //   };
  // }, []);

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
              {/* <TableCell align="right">Rank</TableCell> */}
              {/* <TableCell align="right">Global Reach</TableCell> */}
              <TableCell align='right'>Impressions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((item) => (
              <CollapsibleTableRow item={item} key={item.index} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;

// VIRTUOSO COLLAPSIBLE TABLE VERSION

{/*import './App.css';
import { TableCell, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';
import React, { useState, useEffect } from "react";
import '@fontsource/roboto/500.css';
import { Virtuoso } from 'react-virtuoso';

function CollapsibleTableRow(props) {
  const { item } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow key={item.index} sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
          className="MuiIconButton-root"
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={item.PFP_Url} alt={item.Name} sx={{ mr: 2 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{item.Name}</div>
          </div>
        </div>
      </TableCell>
      <TableCell align="right">{item.Rank}</TableCell>
      <TableCell align="right">{item.Global_Reach + "%"}</TableCell>
      <TableCell align="right">{item.Impressions}</TableCell>
    </TableRow>
    {open && (
  <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
      <div className='expanded-dropdown' style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "1rem" }}>Bio: {item.Description}</div>
          {item.Bio_Link !== "None" && (
            <div>
              Url:{" "}
              <a href={item.Bio_Link} target="_blank" rel="noreferrer">
                {item.Bio_Link}
              </a>
            </div>
          )}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div style={{ textAlign: "right" }}>Favorites:</div>
          <div style={{ textAlign: "right" }}>Retweets:</div>
          <div style={{ textAlign: "right" }}>Replies:</div>
          <div style={{ textAlign: "right" }}>{item.Favorites}</div>
          <div style={{ textAlign: "right" }}>{item.Retweets}</div>
          <div style={{ textAlign: "right" }}>{item.Replies}</div>
        </div>
      </div>
    </TableCell>
  </TableRow>
)}
    </>
  );
}

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

      <Paper style={{ height: "calc(100vh - 300px)", width: "100%" }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell align="right">Rank</TableCell>
            <TableCell align="right">Global Reach</TableCell>
            <TableCell align="right">Impressions</TableCell>
          </TableRow>
        </TableHead>
        <Virtuoso
          data={data}
          itemContent={(index, item) => (
            <CollapsibleTableRow item={item} key={item.index} />
          )}
        />
      </Paper>
    </div>
  );
}

export default App;
*/}


// DATA GRID VERSION

{/*
import './App.css';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Avatar from '@mui/material/Avatar';
import React, { useState, useEffect } from "react";
import '@fontsource/roboto/500.css';

function CollapsibleTableRow(props) {
  const { item } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow key={item.index} sx={{ '& > *': { borderBottom: 'unset' } }}>
      <TableCell>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
        >
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={item.PFP_Url} alt={item.Name} sx={{ mr: 2 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{item.Name}</div>
          </div>
        </div>
      </TableCell>
      <TableCell align="right">{item.Rank}</TableCell>
      <TableCell align="right">{item.Global_Reach + "%"}</TableCell>
      <TableCell align="right">{item.Impressions}</TableCell>
    </TableRow>
    {open && (
  <TableRow>
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
      <div className='expanded-dropdown' style={{ display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: "1rem" }}>Bio: {item.Description}</div>
          {item.Bio_Link !== "None" && (
            <div>
              Url:{" "}
              <a href={item.Bio_Link} target="_blank" rel="noreferrer">
                {item.Bio_Link}
              </a>
            </div>
          )}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
          <div style={{ textAlign: "right" }}>Favorites:</div>
          <div style={{ textAlign: "right" }}>Retweets:</div>
          <div style={{ textAlign: "right" }}>Replies:</div>
          <div style={{ textAlign: "right" }}>{item.Favorites}</div>
          <div style={{ textAlign: "right" }}>{item.Retweets}</div>
          <div style={{ textAlign: "right" }}>{item.Replies}</div>
        </div>
      </div>
    </TableCell>
  </TableRow>
)}
    </>
  );
}

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      fetch('https://be-community-gamification.onrender.com/api/leaderboard/')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setData(data.map((row, index) => ({ ...row, id: index + 1 })));
        })
        .catch(error => {
          console.error(error);
        });
    }

    fetchData();
  }, []);

  console.log(data);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'Name', headerName: 'Name', width: 200 },
    { field: 'Rank', headerName: 'Rank', type: 'number', width: 130 },
    { field: 'Global_Reach', headerName: 'Global Reach', type: 'number', width: 160 },
    { field: 'Impressions', headerName: 'Impressions', type: 'number', width: 150 },
  ];

  return (
    <div className="container">
      <img className="logo" src="/y00ts-logo.svg" alt="Y00TS Colors" />
      <h2 className="title">Leaderboard</h2>
      <img className="leaderboard" src="/y00ts-colors.png" alt="Yoots Logo" />
      <div style={{ marginTop: 20 }} />

      <div style={{ height: 'calc(100vh - 210px)', width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          rowHeight={open ? 110 : 50}
          componentsProps={{
            toolbar: {
              items: [
                {
                  label: 'Export',
                  icon: <KeyboardArrowDownIcon />,
                  onClick: () => alert('You clicked export'),
                  disabled: false,
                  hidden: false,
                },
              ],
            },
          }}
          autoPageSize={true}
          pagination={true}
          disableSelectionOnClick={true}
          rowComponent={CollapsibleTableRow}
        />
      </div>
    </div>
  );
}

export default App;
*/}