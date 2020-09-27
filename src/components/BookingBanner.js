import React from 'react';
import { Parallax } from 'react-parallax';
import { Button } from 'reactstrap';

function BookingBanner() {
  return (
    <Parallax
      blur={0}
      bgImage='/assets/images/booking-banner.jpg'
      bgImageAlt='hand holding a map'
      strength={200}
    >
      <div id='bookingBannerInfo' className='row my-5'>
        <div className='col-md-6 offset-md-3 text-center text-white'>
          <h2 className='display-4 heading'>
            Book Tours From The Comfort of Your Own Home
          </h2>
          <p>
            Using our website, you can easily find and book any tour you want.
            Mobile users will definitely enjoy our app available on all devices.
          </p>
          <Button className='primary-color'>Book Now</Button>
        </div>
      </div>
      <div />
    </Parallax>
  );
}

export default BookingBanner;
