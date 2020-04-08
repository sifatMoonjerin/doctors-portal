import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentList = () => {
    return (
        <div className='container'>
            <h3 className="text-info">Appointment List</h3>
            <div className="row m-5">
                <div className="col-md-5">
                    <Calendar
                        value={new Date()}
                        minDate={new Date()}
                        maxDate={new Date(2020,11,31)}
                        minDetail={'year'}
                    />
                </div>
                <div className="col-md-7">
                    <h1>ok</h1>
                </div>
            </div>
        </div>
    );
};

export default AppointmentList;