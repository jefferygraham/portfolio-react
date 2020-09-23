import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      {/* <!-- NAVIGATION --> */}
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

      {/* <!-- Modal --> */}
      <div
        className='modal fade'
        id='bookingModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='bookTrip'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-lg' role='document'>
          <div className='modal-content'>
            <div className='modal-header text-white color-dark'>
              <h5 className='modal-title heading' id='bookTrip'>
                Book A Trip
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span className='text-white' aria-hidden='true'>
                  &times;
                </span>
              </button>
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='inputDeparture'>From</label>
                    <select id='inputDeparture' className='form-control'>
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='inputDestination'>To</label>
                    <select id='inputDestination' className='form-control'>
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='adults'>Adults</label>
                    <select id='adults' className='form-control'>
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='children'>Children</label>
                    <select id='children' className='form-control'>
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-6'>
                    <label htmlFor='travelclassName'>Travel className</label>
                    <select id='travelclassName' className='form-control'>
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className='form-group col-md-6'>
                    <label htmlFor='departureDate'>Departure Date</label>
                    <input
                      type='date'
                      className='form-control'
                      id='departureDate'
                    />
                  </div>
                </div>
                <div className='form-group'>
                  <div className='custom-control custom-radio custom-control-inline'>
                    <input
                      type='radio'
                      id='oneWay'
                      name='oneWay'
                      className='custom-control-input'
                    />
                    <label className='custom-control-label' htmlFor='oneWay'>
                      One Way
                    </label>
                  </div>
                  <div className='custom-control custom-radio custom-control-inline'>
                    <input
                      type='radio'
                      id='roundTrip'
                      name='roundTrip'
                      className='custom-control-input'
                    />
                    <label className='custom-control-label' htmlFor='roundTrip'>
                      Round Trip
                    </label>
                  </div>
                </div>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'
                >
                  Cancel
                </button>
                <button type='button' className='btn text-white color-primary'>
                  Search Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- CAROUSEL --> */}
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

      {/* <!-- CONTACT FORM --> */}
      <div className='container border shadow p-5'>
        <div className='row'>
          <p className='lead'>Get the Best Vacation Planned by Experts!</p>
        </div>
        <form className='form-inline row'>
          <label className='sr-only' htmlFor='name'>
            Name
          </label>
          <input
            type='text'
            className='form-control mb-2 mr-sm-2 col-xs-12 col-sm'
            id='name'
            placeholder='Your Name'
          />
          <label className='sr-only' htmlFor='email'>
            Email
          </label>
          <input
            type='email'
            className='form-control mb-2 mr-sm-2 col-xs-12 col-sm'
            id='email'
            placeholder='Email'
          />
          <label className='sr-only' htmlFor='telephone'>
            Number
          </label>
          <input
            type='tel'
            className='form-control mb-2 mr-sm-2 col-xs-12 col-sm'
            id='telephone'
            placeholder='Number'
          />
          <label className='sr-only' htmlFor='date'>
            Date
          </label>
          <input
            type='date'
            className='form-control mb-2 mr-sm-2 col-xs-12 col-sm'
            id='date'
          />

          <button
            type='submit'
            className='btn text-white color-primary mb-2 px-5 col-12 col-lg'
          >
            Submit
          </button>
        </form>
        <div className='row'>
          <p className='text-muted small'>
            By submitting this form, you authorize Travel Right to contact you
            about this inquiry.
          </p>
        </div>
      </div>

      {/* <!-- POPULAR DESTINATIONS --> */}
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

      {/* <!-- BOOKING BANNER --> */}
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
              Mobile users will definitely enjoy our app available on all
              devices.
            </p>
            <a href='#' className='btn text-white color-primary'>
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* <!-- SERVICES --> */}
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
              <i
                className='fa fa-thumbs-o-up fa-2x py-2'
                aria-hidden='true'
              ></i>
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

      {/* <!-- FOOTER --> */}
      <footer className='container-fluid color-dark text-light py-5'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-3 d-flex flex-column align-items-center flex-md-row justify-content-md-center justify-content-lg-start'>
              <img
                src='/assets/images/travel-right-logo.svg'
                width='65'
                height='65'
                alt='Travel Right Logo'
              />
              <h3 className='d-inline-block heading text-center'>
                Travel Right
              </h3>
            </div>
            <div className='col-md text-center'>
              <p>All rights reserved.</p>
              <i className='fa fa-copyright' aria-hidden='true'></i> 2020
            </div>
            <div className='col-md-4'>
              <form>
                <div className='form-group'>
                  <label htmlFor='subscribe'>Subscribe</label>
                  <div className='input-group mb-3'>
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
    </div>
  );
}

export default App;
