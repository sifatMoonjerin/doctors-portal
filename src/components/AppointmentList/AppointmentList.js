import React,{ useState, useEffect } from 'react';
import DailyAppTable from '../DailyAppTable/DailyAppTable'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentList = () => {
    const [date, setDate] = useState(new Date())
    const [dailyAppointment, setDailyAppointment] = useState([])

    useEffect(()=>{
        fetch('https://warm-journey-10486.herokuapp.com/dailyAppointment/' + date.toDateString())
        .then(res => res.json())
        .then(data => {
            if(data.message){
                alert('Server Error! Reload the page.')
            } else{
                setDailyAppointment(data)
            }
            
        })
    },[date])

    return (
        <div className='container'>
            <h3 className="text-info">Appointments</h3>
            <div className="row m-5">
                <div className="col-md-5">
                    <Calendar
                        value={date}
                        onChange={d => setDate(d)}
                        minDate={new Date()}
                        maxDate={new Date(2020,11,31)}
                        minDetail={'year'}
                    />
                </div>
                <div className="col-md-7">
                    <DailyAppTable 
                        date={date} 
                        dailyAppointment={dailyAppointment}>
                    </DailyAppTable>
                </div>
            </div>
        </div>
    );
};

export default AppointmentList;