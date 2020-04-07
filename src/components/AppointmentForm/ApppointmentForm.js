import React from 'react';
import Modal from 'react-modal';

const ApppointmentForm = (props) => {
    return (
        <div>
            <Modal 
                isOpen={props.modalIsOpen} 
                onRequestClose={props.closeModal} 
                style={{
                    overlay:{
                        background: "rgba(211,211,211,0.5)"
                    },
                    content:{
                        height:'380px',
                        width: '500px',
                        textAlign: 'center',
                        borderRadius: '20px',
                        margin: 'auto',
                        padding: '25px 50px'
                    }
                }} 
            >
                <h4 className='text-info'>{props.appointmentInfo.title}</h4>
                <form>
                    <input className="form-control mb-2" type="text" name="name" placeholder="Your Name"/>
                    <input className="form-control mb-2" type="email" name="email" placeholder="Email"/>
                    <input className="form-control mb-2" type="tel" name="phone" pattern="[0-9]{11}" placeholder="01700000000"/>
                    <input className="form-control mb-2" type="tel" name="phone" pattern="[0-9]{11}" placeholder="01700000000"/>
                    <input className="btn btn-info" type="submit" value="Send"/>
                </form>
            </Modal>
        </div>
    );
};

export default ApppointmentForm;