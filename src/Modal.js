import React from 'react';

function Modal() {
  return (
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
  );
}

export default Modal;
