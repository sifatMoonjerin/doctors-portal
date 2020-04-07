import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/getAppointment'>
                <button className="btn btn-primary m-1">Get Appointment</button>
            </Link>
            <Link to='/doctorPanel'>
                <button className="btn btn-primary m-1">Doctor Panel</button>
            </Link>

        </div>
    );
};

export default Home;