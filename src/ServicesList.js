import React from 'react';

const services = [
  {
    heading: 'Ticketing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, explicabo.',
    faIcon: 'fa fa-plane fa-2x',
  },
  {
    heading: 'Tour Guides',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, explicabo.',
    faIcon: 'fa fa-thumbs-o-up fa-2x',
  },
  {
    heading: 'Hotel Booking',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, explicabo.',
    faIcon: 'fa fa-bed fa-2x',
  },
];

function ServicesList() {
  return (
    <div id='services' className='container-fluid bg-light py-4'>
      <div className='container'>
        <div className='row flex-column align-items-center'>
          <h2 className='display-4 heading'>Services</h2>
        </div>
        <div className='row text-center'>
          {services.map((service) => (
            <div key={service.heading} className='col-md pb-3'>
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

export default ServicesList;
