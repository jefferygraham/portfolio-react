import React from 'react';

function Navigation() {
  return (
    <nav className='navbar navbar-expand-lg bg-light fixed-top navbar-light'>
      <a
        className='navbar-brand ml-3 d-flex flex-row align-items-center'
        href='#'
      >
        <img
          src='/assets/images/travel-right-logo.svg'
          width='65'
          height='65'
          alt='Travel Right Logo'
        />
        <h2 className='d-inline heading m-0 pl-2'>Travel Right</h2>
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarContent'
        aria-controls='navbarContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div
        className='collapse navbar-collapse justify-content-end'
        id='navbarContent'
      >
        <ul className='navbar-nav'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Services
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Contact
            </a>
          </li>
        </ul>
        {/* <!-- Button trigger modal --> */}
        <button
          className='btn color-primary text-white my-2 my-sm-0 mx-lg-4'
          data-toggle='modal'
          data-target='#bookingModal'
          type='submit'
        >
          Book Now
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
