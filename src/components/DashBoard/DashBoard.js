import React,{ useState, useEffect } from 'react';
import AllAppTable from '../AllAppTable/AllAppTable';
import CounterCard from '../CounterCard/CounterCard';

const DashBoard = () => {
    const [allAppointments, setAllAppointments] = useState([])

    useEffect(()=>{
        fetch('https://warm-journey-10486.herokuapp.com/allAppointments')
        .then(res => res.json())
        .then(data => {
            setAllAppointments(data)
        })
    },[])

    const getTotalApp = () => {
        const data = {
            count: allAppointments.length,
            text: 'Total Appointments',
            backgroundColor: '#5cb85c'
        }
        return data
    }

    const getTodayApp = () => {
        const date = new Date()
        const newArray = allAppointments.filter(app => {
            return app.appointmentDate === date.toDateString()
        })
        const data = {
            count: newArray.length,
            text: "Today's Appointments",
            backgroundColor: '#0275d8'
        }
        return data
    }

    const getPendingToday = () => {
        const date = new Date()
        const newArray = allAppointments.filter(app => {
            return app.appointmentDate === date.toDateString() && !app.visited
        })
        const data = {
            count: newArray.length,
            text: "Pending Appointments",
            backgroundColor: '#d9534f'
        }
        return data
    }

    const getPatient = () => {
        const patientArray = [];
        allAppointments.forEach(app => {
            if(patientArray.indexOf(app.email) === -1){
                patientArray.push(app.email)
            }
        })
        const data = {
            count: patientArray.length,
            text: "Total Patients",
            backgroundColor: '#f0ad4e'
        }
        return data
    }

    return (
        <div>
            <h3 className="text-info">Dashboard</h3>
            <div className="row">
                <div className="col-md-3 d-flex justify-content-center">
                    <CounterCard data={getPendingToday()}></CounterCard>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <CounterCard data={getTodayApp()}></CounterCard>
                </div> 
                <div className="col-md-3 d-flex justify-content-center">
                    <CounterCard data={getTotalApp()}></CounterCard>
                </div>
                <div className="col-md-3 d-flex justify-content-center">
                    <CounterCard data={getPatient()}></CounterCard>
                </div>
            </div>
            
            <AllAppTable allAppointments={allAppointments}></AllAppTable>
        </div>
    );
};

export default DashBoard;