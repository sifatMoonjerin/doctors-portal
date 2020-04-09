import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ServiceCard from '../ServiceCard/ServiceCard';
import ApppointmentForm from '../AppointmentForm/ApppointmentForm';

const ServiceList = (props) => {
    const [services, setServices] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [appointmentInfo, setAppointmentInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(()=>{
        fetch('https://warm-journey-10486.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setIsLoading(false)
            setServices(data)
        })
    },[])


    const openModal = (title,time,startTime) => {
        setAppointmentInfo({title,time,startTime,date: props.date})
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    

    // const updateServices = () => {
    //     fetch('https://warm-journey-10486.herokuapp.com/addServices',{
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(services)
    //       })
    //       .then(res => res.json())
    //       .then(data => {
    //           console.log('post successful');
    //       })
    // }

    return (
        <div className='mb-5'>
            <h3 className="text-info m-4">
                Available Appointments on {props.date.toLocaleDateString(undefined, options)}
            </h3>
            {/* <button onClick={updateServices}>add services</button> */}
            {isLoading && <CircularProgress className='mt-3' disableShrink>
                </CircularProgress>}
            <div className="row">
                {
                    services.map(el => <div 
                        key={el._id} 
                        className="col-md-4 d-flex justify-content-center">
                        <ServiceCard
                            title={el.title}
                            time={el.time}
                            startTime={el.startTime}
                            date={props.date}
                            openModal={openModal}
                        ></ServiceCard>
                    </div>)
                }
            </div>
            <ApppointmentForm
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                appointmentInfo={appointmentInfo}
            ></ApppointmentForm>
        </div>
    );
};

export default ServiceList;