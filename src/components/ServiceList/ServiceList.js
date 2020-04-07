import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceList = (props) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    const services = [
        {
            title: 'Teeth Orthodontics',
            time: '08:00 am - 09:00 am',
            startTime: '08:00 AM'
        },
        {
            title: 'Cosmetic Dentistry',
            time: '10:00 am - 11:30 am',
            startTime: '10:00 AM'
        },
        {
            title: 'Teeth Cleaning',
            time: '05:00 pm - 06:30 pm',
            startTime: '05:00 PM'
        },
        {
            title: 'Cavity Protection',
            time: '07:00 pm - 08:00 pm',
            startTime: '07:00 PM'
        },
        {
            title: 'Teeth Orthodontics',
            time: '08:00 pm - 09:00 pm',
            startTime: '08:00 PM'
        },
        {
            title: 'Cosmetic Dentistry',
            time: '09:00 pm - 10:00 pm',
            startTime: '09:00 AM'
        }
    ]

    return (
        <div>
            <h3 className="text-info m-4">
                Available Appointments on {props.date.toLocaleDateString(undefined, options)}
            </h3>
            <div className="row">
                {
                    services.map(el => <div 
                    className="col-md-4 d-flex justify-content-center">
                        <ServiceCard 
                            title={el.title}
                            time={el.time}
                        ></ServiceCard>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default ServiceList;