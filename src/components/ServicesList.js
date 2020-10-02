import React from 'react';
import { Loading } from './LoadingComponent';

const ServicesList = (props) => {
  if (props.isLoading) {
    return (
      <div className='container'>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  }
  if (props.services) {
    return (
      <div id='services' className='container-fluid bg-light py-4'>
        <div className='container'>
          <div className='row flex-column align-items-center'>
            <h2 className='display-4 heading'>Services</h2>
          </div>
          <div className='row text-center'>
            {props.services.map((service) => (
              <div key={service.id} className='col-md pb-3'>
                <i className={service.faIcon} aria-hidden='true'></i>
                <h3 className='heading'>{service.heading}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default ServicesList;
