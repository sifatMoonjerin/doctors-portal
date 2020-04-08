import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisitButton from '../VisitButton/VisitButton';
import './DailyAppTable.css';
  

const DailyAppTable = (props) => {
    console.log(props.dailyAppointment)

    return (
        <div>
            <div className="container daily-table-container">
            <div className="d-flex justify-content-between mt-3 mb-1 text-info">
                <h6>Appointments</h6>
                <h6>{props.date.toDateString()}</h6>
            </div>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Schedule</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.dailyAppointment.map((appointment) => (
                        <TableRow key={appointment.name}>
                        <TableCell component="th" scope="row">
                            {appointment.name}
                        </TableCell>
                        <TableCell align="right">{appointment.startTime}</TableCell>
                        <TableCell align="right">
                            {
                                <VisitButton
                                    id={appointment._id} 
                                    visited={appointment.visited}
                                />
                            }
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </div>
    );
};

export default DailyAppTable;