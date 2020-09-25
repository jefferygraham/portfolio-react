import React from 'react';

function Footer() {
  return (
    <footer className='container-fluid color-dark text-light py-3'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-3 d-flex flex-column align-items-center flex-md-row justify-content-md-center justify-content-lg-start'>
            <img
              src='/assets/images/travel-right-logo.svg'
              width='65'
              height='65'
              alt='Travel Right Logo'
            />
            <h3 className='d-inline-block heading text-center'>Travel Right</h3>
          </div>
          <div className='col-md text-center'>
            <small>
              <p>All rights reserved.</p>
              <i className='fa fa-copyright' aria-hidden='true'></i> 2020
            </small>
          </div>
          <div className='col-md-4'>
            <form>
              <div className='form-group'>
                <label htmlFor='subscribe'>Subscribe</label>
                <div className='input-group mb-2'>
                  <input
                    type='text'
                    className='form-control'
                    id='subscribe'
                    placeholder='Enter email'
                    aria-label="Users's email"
                    aria-describedby='emailHelp'
                  />
                  <div className='input-group-append'>
                    <button className='btn btn-light' type='button'>
                      <i className='fa fa-paper-plane' aria-hidden='true'></i>
                    </button>
                  </div>
                </div>
                <small id='emailHelp' className='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
