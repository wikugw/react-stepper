import React, { useContext } from 'react'
import { Table, TableBody, TableContainer, TableHead, TableCell, TableRow } from '@material-ui/core';
import { multiStepContext } from '../StepContext';

const DisplayData = () => {

  const { finalData } = useContext(multiStepContext);

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
            <TableCell style={{ fontWeight: 'bold' }} align="center" >Facebook</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="center" >Twitter</TableCell>
            <TableCell style={{ fontWeight: 'bold' }} align="center" >Instagram</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {finalData.map(data => {
            return (
              <TableRow key={data.email}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.status}</TableCell>
                <TableCell>{data.no_hp}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.mafa}</TableCell>
                <TableCell>{data.mifa}</TableCell>
                <TableCell>{data.facebook}</TableCell>
                <TableCell>{data.twitter}</TableCell>
                <TableCell>{data.instagram}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}


export default DisplayData
