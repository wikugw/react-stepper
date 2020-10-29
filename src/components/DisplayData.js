import React, { useContext } from 'react'
import { Button, Table, TableBody, TableContainer, TableHead, TableCell, TableRow } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

const DisplayData = () => {

  const { finalData, update, destroy } = useContext(multiStepContext);
  console.log(finalData);

  return (
    <TableContainer style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}  >
      <Table style={{ width: '70%' }} size="small">
        <TableHead  >
          <TableRow >
            <TableCell style={{ fontWeight: 'bold' }} align="center" >Name</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="center" >Status</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="center" >NO HP</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="center" >Email</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="center" >Mafa</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="center" >Mifa</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="center" >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalData.map(data => {
            const bio = data.biodata;
            return (
              <TableRow key={data.id}>
                <TableCell>{bio.name}</TableCell>
                <TableCell>{bio.status}</TableCell>
                <TableCell>{bio.no_hp}</TableCell>
                <TableCell>{bio.email}</TableCell>
                <TableCell>{bio.mafa}</TableCell>
                <TableCell>{bio.mifa}</TableCell>
                <TableCell>
                  <Button style={{ marginRight: 2 }} variant="contained" onClick={() => { update(data.id) }} color="primary">Edit</Button>
                  <Button variant="contained" onClick={() => { destroy(data.id) }} color="secondary">Hapus</Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer >
  )
}


export default DisplayData
