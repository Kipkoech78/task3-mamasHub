import * as React from 'react';
import "./App.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
export default function BasicTable({data = []}) {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead component="h2" variant="subtitle1" >
          <TableRow className='tableheading'  >
            <TableCell>id</TableCell>
            <TableCell align="center">name</TableCell>
            <TableCell align="center">username</TableCell>
            <TableCell align="center">email</TableCell>
            <TableCell align="center">adress</TableCell>
            <TableCell>phone</TableCell>
            <TableCell>website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{user.id}</TableCell>
              <TableCell align="center">{user.name}</TableCell>
              <TableCell align="center">{user.username}</TableCell>
              <TableCell align="center">{user.email}</TableCell>
              <TableBody  align="left" >{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</TableBody>
              <TableCell align="center">{user.phone}</TableCell>
              <TableCell align="center">{user.website}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
