import { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Models() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/mlmodels/show"); // replace with actual URL
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">User Name</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.user_id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.user_id}</TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Models;
