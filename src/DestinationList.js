import React from 'react';

function DestinationList() {
  return (
    <div className='container px-5 py-5'>
      <div className='row flex-column align-items-center'>
        <h2 className='display-4 heading'>Popular Destinations</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          necessitatibus.
        </p>
      </div>
      {/* <!-- CARD DECK --> */}
      <div className='row pt-5'>
        <div className='card-deck'>
          <div className='card border-0'>
            <img
              className='card-img-top rounded-0'
              src='/assets/images/paris.jpg'
              alt='Paris'
            />
            <div className='card-body pl-0'>
              <h5 className='card-title'>Paris</h5>
            </div>
          </div>
          <div className='card border-0'>
            <img
              className='card-img-top rounded-0'
              src='/assets/images/thailand.jpg'
              alt='Thailand'
            />
            <div className='card-body pl-0'>
              <h5 className='card-title'>Thailand</h5>
            </div>
          </div>
          <div className='card border-0'>
            <img
              className='card-img-top rounded-0'
              src='/assets/images/greece.jpg'
              alt='Greece'
            />
            <div className='card-body pl-0'>
              <h5 className='card-title'>Greece</h5>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='card-deck'>
          <div className='card border-0'>
            <img
              className='card-img-top rounded-0'
              src='/assets/images/australia.jpg'
              alt='Australia'
            />
            <div className='card-body pl-0'>
              <h5 className='card-title'>Australia</h5>
            </div>
          </div>
          <div className='card border-0'>
            <img
              className='card-img-top rounded-0'
              src='/assets/images/cape-town.jpg'
              alt='Cape Town'
            />
            <div className='card-body pl-0'>
              <h5 className='card-title'>Cape Town</h5>
            </div>
          </div>
          <div className='card border-0'>
            <img
              className='card-img-top rounded-0'
              src='/assets/images/rome.jpg'
              alt='Rome'
            />
            <div className='card-body pl-0'>
              <h5 className='card-title'>Rome</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationList;
