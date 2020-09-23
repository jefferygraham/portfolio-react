import React from 'react';

function ServicesList() {
  return (
    <div id='services' className='container-fluid bg-light py-4'>
      <div className='container'>
        <div className='row flex-column align-items-center'>
          <h2 className='display-4 heading'>Services</h2>
        </div>
        <div className='row text-center'>
          <div className='col-md pb-3'>
            <i className='fa fa-plane fa-2x py-2' aria-hidden='true'></i>
            <h3 className='heading'>Ticketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
              explicabo.
            </p>
          </div>
          <div className='col-md pb-3'>
            <i className='fa fa-thumbs-o-up fa-2x py-2' aria-hidden='true'></i>
            <h3 className='heading'>Tour Guides</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
              explicabo.
            </p>
          </div>
          <div className='col-md pb-3'>
            <i className='fa fa-bed fa-2x py-2' aria-hidden='true'></i>
            <h3 className='heading'>Hotel Bookings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
              explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesList;
