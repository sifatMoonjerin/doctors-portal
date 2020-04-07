import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Appointment.css'

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='container'>
            <h1>Appointment</h1>
            {console.log(date.toDateString())}
            <Calendar
                onChange={d => setDate(d)}
                value={date}
                minDate={new Date()}
                maxDate={new Date(2020,11,31)}
                minDetail={'year'}
            />
        </div>
    );
};

export default Appointment;