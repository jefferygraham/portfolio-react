import React from 'react';

function Carousel() {
  return (
    <div id='mainCarousel' className='carousel slide' data-ride='carousel'>
      <ol className='carousel-indicators'>
        <li
          data-target='#mainCarousel'
          data-slide-to='0'
          className='active'
        ></li>
        <li data-target='#mainCarousel' data-slide-to='1'></li>
        <li data-target='#mainCarousel' data-slide-to='2'></li>
        <li data-target='#mainCarousel' data-slide-to='3'></li>
      </ol>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            className='d-block w-100'
            src='/assets/images/globe.jpg'
            alt='Globe'
          />
          <div className='carousel-caption text-left d-none d-md-block'>
            <h5 className='display-4 heading'>Travel Right</h5>
            <p className='lead'>
              If you're going to travel, you might as well Travel Right.
            </p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            className='d-block w-100'
            src='/assets/images/train.jpg'
            alt='Train'
          />
          <div className='carousel-caption text-left d-none d-md-block'>
            <h5 className='display-4 heading'>Land</h5>
            <p className='lead'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
              provident.
            </p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            className='d-block w-100'
            src='/assets/images/plane.jpg'
            alt='Plane in clouds'
          />
          <div className='carousel-caption text-left d-none d-md-block'>
            <h5 className='display-4 heading'>Air</h5>
            <p className='lead'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
              provident.
            </p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            className='d-block w-100'
            src='/assets/images/cruise.jpg'
            alt='Deck of cruise ship'
          />
          <div className='carousel-caption text-left d-none d-md-block'>
            <h5 className='display-4 heading'>Sea</h5>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
              voluptatibus.
            </p>
          </div>
        </div>
      </div>
      <a
        className='carousel-control-prev'
        href='#mainCarousel'
        role='button'
        data-slide='prev'
      >
        <span className='fa fa-arrow-left fa-2x' aria-hidden='true'></span>
        <span className='sr-only'>Previous</span>
      </a>
      <a
        className='carousel-control-next'
        href='#mainCarousel'
        role='button'
        data-slide='next'
      >
        <span className='fa fa-arrow-right fa-2x' aria-hidden='true'></span>
        <span className='sr-only'>Next</span>
      </a>
    </div>
  );
}

export default Carousel;
