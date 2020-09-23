import React from 'react';

function BookingBanner() {
  return (
    <div
      id='bookingBanner'
      data-jarallax
      data-speed='0.2'
      className='jarallax py-5'
    >
      <img
        className='jarallax-img'
        src='/assets/images/booking-banner.jpg'
        alt=''
      />
      <div id='bookingBannerInfo' className='row'>
        <div className='col-md-6 offset-md-3 text-center text-white'>
          <h2 className='display-4 heading'>
            Book Tours From The Comfort of Your Own Home
          </h2>
          <p>
            Using our website, you can easily find and book any tour you want.
            Mobile users will definitely enjoy our app available on all devices.
          </p>
          <a href='#' className='btn text-white color-primary'>
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default BookingBanner;
